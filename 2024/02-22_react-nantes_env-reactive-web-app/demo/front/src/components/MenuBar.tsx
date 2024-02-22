import { Link } from "@swan-io/chicane";
import { Router } from "../pages/router";
import { useEnv } from "../hooks/useEnv";
import { match } from "ts-pattern";

export function MenuBar() {
  return (
    <nav>
      <ul>
        <li>
          <strong>MaybeTheBestBank</strong> <HealthIcon />
        </li>
      </ul>
      <ul>
        <li>
          <Link to={Router.Home()}>Dashboard</Link>
        </li>
        <li>
          <Link to={Router.Cards()}>Cards</Link>
        </li>
        <li>
          <Link to={Router.Transactions()}>Transactions</Link>
        </li>
      </ul>
    </nav>
  );
}

function HealthIcon() {
  const { health } = useEnv();
  return match(health.bff)
    .with("ok", () => <span>🟢</span>)
    .with("ko", () => <span>🔴</span>)
    .with("partial", () => <span>🟡</span>)
    .exhaustive();
}
