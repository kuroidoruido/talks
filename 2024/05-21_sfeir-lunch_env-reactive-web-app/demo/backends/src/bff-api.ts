import { dumbApi } from './dumb-api';

dumbApi({
  name: 'Back For Front API',
  port: 9000,
  dependsOn: [
    { name: 'Transactions API', url: 'http://localhost:9100' },
    { name: 'Accounts API', url: 'http://localhost:9200' },
    { name: 'Cards API', url: 'http://localhost:9300' },
    { name: 'DumbLLM API', url: 'http://localhost:9900' },
  ],
  on({ path }) {
      if (path.startsWith('/api/v1/transactions')) {
        return get('http://localhost:9100' + path);
      }
      if (path.startsWith('/api/v1/accounts')) {
        return get('http://localhost:9200' + path);
      }
      if (path.startsWith('/api/v1/cards')) {
        return get('http://localhost:9300' + path);
      }
      if (path === '/api/v1/help') {
        return get('http://localhost:9900/api/v1/help');
      }
  },
});

function get(url: string) {
  return fetch(url).then((res) => res.json());
}
