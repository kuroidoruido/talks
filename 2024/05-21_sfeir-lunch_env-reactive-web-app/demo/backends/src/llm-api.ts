import { dumbApi } from './dumb-api';

dumbApi({
  name: 'DumbLLM API',
  port: 9900,
  on({ path }) {
    if (path === '/api/v1/help') {
      return { result: "Sorry... I don't know... 💩" };
    }
  },
});
