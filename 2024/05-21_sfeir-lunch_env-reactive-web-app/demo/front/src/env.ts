import { produce } from "immer";

export interface Env {
  config: {
    apiUrl: string;
  };
  toggles: {
    static: {
      assistant: boolean;
    };
    dynamic: {
      accounts: boolean;
      transactions: boolean;
      cards: boolean;
      assistant: boolean;
    };
  };
  health: {
    bff: "ok" | "partial" | "ko";
  };
}

const DEFAULT_ENV_STATE: Env = {
  config: {
    apiUrl: "",
  },
  toggles: {
    static: {
      assistant: false,
    },
    dynamic: {
      accounts: true,
      cards: true,
      transactions: true,
      assistant: true,
    },
  },
  health: {
    bff: "ok",
  },
};

export class EnvListener {
  private state: Env = DEFAULT_ENV_STATE;

  constructor() {
    this.getConfig().then(() => {
      this.watchHealth();
    });
    this.watchToggle();
  }

  public getEnv(): Readonly<Env> {
    return this.state;
  }

  public subscribe(cb: (env: AppNewEnvStateEvent) => void) {
    window.addEventListener("app.new-env-state", cb);
  }

  public unsubscribe(cb: (env: AppNewEnvStateEvent) => void) {
    window.removeEventListener("app.new-env-state", cb);
  }

  private update(editor: (draft: Env) => void) {
    const newState = produce(this.state, editor);
    if (this.state !== newState) {
      const oldEnv = this.state;
      this.state = newState;
      window.dispatchEvent(new AppNewEnvStateEvent(oldEnv, this.state));
    }
  }

  private getConfig() {
    return fetch("/config.json")
      .then((res) => res.json())
      .then((config) =>
        this.update((draft) => {
          draft.config = config;
        })
      );
  }

  private watchToggle() {
    this.getToggle();
    setInterval(() => this.getToggle(), 5_000);
  }
  private getToggle() {
    return fetch("/toggle.json")
      .then((res) => res.json())
      .then((toggles) =>
        this.update((draft) => {
          draft.toggles.static = toggles;
        })
      );
  }

  private watchHealth() {
    this.getHealth();
    setInterval(() => this.getHealth(), 1_000);
  }
  private getHealth() {
    return fetch(this.state.config.apiUrl + "/health")
      .then((res) => res.json())
      .then((healths: Health) => {
        this.update((draft) => {
          draft.health.bff = healths.health;
          draft.toggles.dynamic.accounts =
            healths.dependencies?.find((api) => api.name === "Accounts API")
              ?.health !== "ko";
          draft.toggles.dynamic.cards =
            healths.dependencies?.find((api) => api.name === "Cards API")
              ?.health !== "ko";
          draft.toggles.dynamic.transactions =
            healths.dependencies?.find((api) => api.name === "Transactions API")
              ?.health !== "ko";
          draft.toggles.dynamic.assistant =
            healths.dependencies?.find((api) => api.name === "DumbLLM API")
              ?.health !== "ko";
        });
      })
      .catch(() => {
        this.update((draft) => {
          draft.health.bff = "ko";
          draft.toggles.dynamic.accounts = false;
          draft.toggles.dynamic.cards = false;
          draft.toggles.dynamic.transactions = false;
          draft.toggles.dynamic.assistant = false;
        });
      });
  }
}

type HealthStatus = "ok" | "partial" | "ko";
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

class AppNewEnvStateEvent extends Event {
  constructor(public readonly oldValue: Env, public readonly newValue: Env) {
    super("app.new-env-state", { bubbles: true, composed: true });
  }
}

declare global {
  interface Window {
    addEventListener(
      eventType: "app.new-env-state",
      listener: (event: AppNewEnvStateEvent) => void
    ): void;
    removeEventListener(
      eventType: "app.new-env-state",
      listener: (event: AppNewEnvStateEvent) => void
    ): void;
  }
}

export const envListener = new EnvListener();
