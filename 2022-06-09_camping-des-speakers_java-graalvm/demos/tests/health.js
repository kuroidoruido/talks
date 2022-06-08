import { check, sleep } from 'k6';
import { createTodolistClient } from './todolist-client.js';

export let options = {
  // stages: [10, 50, 100, 250, 500, 1000].map(target => ({ duration: '15s', target })),
  duration: '1s',
  vus: 1,
};

export default function health() {
  const api = createTodolistClient('http://localhost:8080', 'health');
  const res = api.health();
  check(res, { 'healthy': (r) => r.status === 204 });
  sleep(1);
}

