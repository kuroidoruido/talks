import { useState } from "react";
import { useEnv } from "../hooks/useEnv";
import { useFetchCallback } from "../hooks/useFetch";
import "./Assistant.css";

export function Assistant() {
  const env = useEnv();
  const {
    state: assistantResponse,
    run,
    reset,
  } = useFetchCallback<GetAssistantApi>({
    url: env.config.apiUrl + "/api/v1/help",
  });
  const [message, setMessage] = useState<string | null>(null);

  if (!env.toggles.static.assistant || !env.toggles.dynamic.assistant) {
    return <></>;
  }

  const onClick = () => {
    reset();
    run();
    setMessage("...");
  };

  return (
    <button
      type="button"
      className="assistant"
      {...(message || assistantResponse
        ? { "data-tooltip": assistantResponse?.result ?? message }
        : {})}
      onClick={onClick}
    >
      🧑‍🚒
    </button>
  );
}
