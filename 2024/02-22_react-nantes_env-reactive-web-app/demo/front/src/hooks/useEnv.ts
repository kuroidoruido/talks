import { useSyncExternalStore } from "react";
import { envListener } from "../env";

export function useEnv() {
  return useSyncExternalStore((cb) => {
    envListener.subscribe(cb);
    return () => envListener.unsubscribe(cb);
  }, envListener.getEnv.bind(envListener));
}
