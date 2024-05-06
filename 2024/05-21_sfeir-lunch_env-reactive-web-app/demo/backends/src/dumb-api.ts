import http from 'node:http';

interface DumbApiConfig {
  name: string;
  port: number;
  dependsOn?: { name: string; url: string; optional?: boolean }[];
  on(req: { method: string; path: string }): Promise<unknown> | unknown;
}

export function dumbApi({ name, port, dependsOn = [], on: requestHandler }: DumbApiConfig) {
  const host = '0.0.0.0';

  const server = http.createServer(async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.writeHead(200, undefined, { 'Access-Control-Allow-Origin': '*' });
      res.end('');
      return;
    }
    if (req.url === '/health') {
      const response: Health = { health: 'ok' };
      if (dependsOn.length > 0) {
        response.dependencies = await Promise.all(
          dependsOn.map(({ name: depsName, url: depsUrl, optional = false }) =>
            fetch(`${depsUrl}/health`)
              .then((res) => res.json())
              .then(
                (res): HealthDeps => ({
                  name: depsName,
                  url: depsUrl,
                  health: (res.health as HealthStatus) ?? 'ko',
                  optional,
                }),
              )
              .catch((): HealthDeps => ({ name: depsName, url: depsUrl, health: 'ko', optional })),
          ),
        );

        if (
          (response.dependencies.some((dep) => dep.health === 'ko') &&
            response.dependencies.some((dep) => dep.health !== 'ko')) ||
          response.dependencies.every((dep) => dep.health === 'ko' && dep.optional)
        ) {
          response.health = 'partial';
        } else {
          response.health = response.dependencies.every((dep) => dep.health === 'ok' || dep.optional)
            ? 'ok'
            : response.dependencies.every((dep) => dep.health === 'ko' && !dep.optional)
            ? 'ko'
            : 'partial';
        }
      }
      json(res, response);
      return;
    }
    try {
      const response = await requestHandler({ method: req.method!, path: req.url! });
      if (response) {
        if (typeof response === 'string' || typeof response === 'number') {
          plainText(res, response);
        } else {
          json(res, response);
        }
      } else {
        plainText(res, 'Nothing here... 🙈', 404);
      }
    } catch (ex) {
      console.error('ERROR: ', ex);
      plainText(res, 'An error occured... 😰', 500);
    }
  });

  server.listen(port, host, () => {
    console.log(`Server ${name} is running on http://${host}:${port}`);
  });

  return server;
}

type HealthStatus = 'ok' | 'partial' | 'ko';
interface HealthDeps {
  name: string;
  url: string;
  health: HealthStatus;
  optional: boolean;
}
interface Health {
  health: HealthStatus;
  dependencies?: HealthDeps[];
}

function json(res: http.ServerResponse<http.IncomingMessage>, body: unknown, status = 200) {
  res.writeHead(status, undefined, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(body));
}

function plainText(res: http.ServerResponse<http.IncomingMessage>, body: string | number, status = 200) {
  res.writeHead(status, undefined, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(body);
}
