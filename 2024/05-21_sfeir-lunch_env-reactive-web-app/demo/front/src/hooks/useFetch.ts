import { useEffect, useState } from "react";

export interface UseFetchProps {
  url: string;
}

export function useFetch<T>({ url }: UseFetchProps): T | null {
  const [state, setState] = useState<T | null>(null);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    console.log('fetch', retry, new Date())
    fetch(url)
      .then((res) => res.json())
      .then(setState)
      .catch(() => {
        if (retry < 5) {
          setTimeout(() => {
            setRetry(retry + 1);
          }, 100 * (retry + 1));
          console.log('fetch delay', 200 * (retry * retry))
        }
      });
  }, [url, retry]);

  return state;
}

export function useFetchCallback<T>({ url }: UseFetchProps): {
  run: () => void;
  state: T | null;
  reset: VoidFunction;
} {
  const [state, setState] = useState<T | null>(null);
  const [retry, setRetry] = useState(0);

  const run = () => {
    fetch(url)
      .then((res) => res.json())
      .then(setState)
      .catch(() => {
        if (retry < 3) {
          setTimeout(() => {
            setRetry(retry + 1);
          }, 100 * (retry + 1));
        }
      });
  };

  return {
    run,
    state,
    reset: () => {
      setState(null);
      setRetry(0);
    },
  };
}
