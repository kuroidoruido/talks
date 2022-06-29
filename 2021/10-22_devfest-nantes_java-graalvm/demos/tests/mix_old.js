import { group } from 'k6';
import { Counter } from 'k6/metrics';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';

import health from './health.js';
import scenario1 from './scenario1.js';
import scenario2 from './scenario2.js';

export let options = {
  stages: [10, 50, 100, 250, 500, 1000].map(target => ({ duration: '15s', target })),
};

// const scenarii = [health, scenario1, scenario2, scenario1, scenario2, scenario1, scenario2];
const scenarii = buildMix([
  { scenario: health, weight: 10 },
  { scenario: scenario1, weight: 1 },
  { scenario: scenario2, weight: 1 },
]);

const scenariiCounters = {
  'all': new Counter(`scenarii-mix_scenarii`),
  [health.name]: new Counter(`scenarii-mix_${health.name}`),
  [scenario1.name]: new Counter(`scenarii-mix_${scenario1.name}`),
  [scenario2.name]: new Counter(`scenarii-mix_${scenario2.name}`),
};

export function setup() {
  Object.values(scenariiCounters).forEach(counter => counter.add(0));
}

export default function () {
  const scenario = scenarii[randomIntBetween(0, scenarii.length-1)];
  scenariiCounters['all'].add(1);
  scenariiCounters[scenario.name].add(1);
  group(scenario.name, scenario);
}

function buildMix(mixDef) {
  return mixDef.reduce((mix,next) => {
    const step = [ ...mix, ...new Array(next.weight).fill(next.scenario) ];
    return step;
  }, []);
}