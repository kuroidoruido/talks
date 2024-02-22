import { Link } from "@swan-io/chicane";
import { useEnv } from "../hooks/useEnv";
import { useFetch } from "../hooks/useFetch";
import { Router } from "../pages/router";
import { TransactionsTable } from "./TransactionsTable";

export function SummaryAccountInfo() {
  const env = useEnv();
  const accountInfos = useFetch<GetAccountApi>({
    url: env.config.apiUrl + "/api/v1/accounts/1",
  });

  if (!accountInfos) {
    if (!env.toggles.dynamic.accounts) {
      return (
        <article className="pico-background-sand-200 pico-color-red-750">
          On répare au plus vite ! 🚑
        </article>
      );
    }
    return (
      <article aria-busy="true">
        On cherche le status de votre compte... 🕵🏾‍♀️
      </article>
    );
  }

  return (
    <article>
      <header>
        <h2>Solde: {accountInfos.account.balance.toFixed(2)}€</h2>
      </header>

      <h3>Vos dernières transactions</h3>
      <TransactionsTable transactions={accountInfos.account.lastTransactions} />
      <Link to={Router.Transactions()}>Voir plus de transaction</Link>
    </article>
  );
}
