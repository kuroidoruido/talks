import { sleep } from 'k6';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export function waitRealisticDelay() {
    sleep(randomIntBetween(2, 10));
}

export function checkNotAnErrorResponse(res) {
    return typeof res !== 'number' && res !== undefined && res !== null;
}