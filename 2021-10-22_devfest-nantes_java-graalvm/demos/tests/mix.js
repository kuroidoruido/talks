import { group } from 'k6';
import { Counter } from 'k6/metrics';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

import _health from './health.js';
import _scenario1 from './scenario1.js';
import _scenario2 from './scenario2.js';

const withCounter = useCounters();
export const health = withCounter(_health);
export const scenario1 = withCounter(_scenario1);
export const scenario2 = withCounter(_scenario2);

const periodDuration = 60;
const periods = [10, 50, 100, 250, 500, 1000];

export const options = {
  scenarios: {
    [_health.name]: {
      exec: _health.name,
      executor: 'constant-vus',
      vus: 10,
      duration: periodDuration*(periods.length+1)+'s',
    },
    [_scenario1.name]: {
      exec: _scenario1.name,
      executor: 'ramping-vus',
      startVUs: 0,
      stages: periods.map(target => ({ duration: periodDuration+'s', target }))
    },
    [_scenario2.name]: {
      exec: _scenario2.name,
      executor: 'ramping-vus',
      startVUs: 0,
      stages: periods.map(target => ({ duration: periodDuration+'s', target }))
    }
  },
};

function useCounters() {
  const counterPrefix = 'scenarii-mix_';
  const counters = {
    'all': new Counter(`${counterPrefix}total-iteration`),
  }
  return function withCounter(scenario) {
    counters[scenario.name] = new Counter(`${counterPrefix}${scenario.name}`);
    return function () {
      counters['all'].add(1);
      counters[scenario.name].add(1);
      scenario();
    };
  };
}