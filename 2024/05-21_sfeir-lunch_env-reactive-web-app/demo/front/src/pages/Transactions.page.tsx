import { TransactionsTable } from "../components/TransactionsTable";
import { useEnv } from "../hooks/useEnv";
import { useFetch } from "../hooks/useFetch";

export function TransactionsPage() {
  return (
    <>
      <h1>Transactions</h1>
      <DataZone />
    </>
  );
}

function DataZone() {
  const env = useEnv();
  const accountInfos = useFetch<GetAccountApi>({
    url: env.config.apiUrl + "/api/v1/accounts/1",
  });
  const transactions = useFetch<GetTransactionApi>({
    url:
      env.config.apiUrl + "/api/v1/transactions/" + accountInfos?.account.iban,
  });

  if (!transactions?.transactions || !accountInfos?.account.lastTransactions) {
    if (!env.toggles.dynamic.transactions) {
      return (
        <article className="pico-background-sand-200 pico-color-red-750">
          On répare au plus vite ! 🚑
        </article>
      );
    }

    return (
      <article aria-busy="true">On cherche vos transactions... 🕵🏾‍♀️</article>
    );
  }

  return (
    <TransactionsTable
      transactions={
        transactions?.transactions ?? accountInfos?.account.lastTransactions
      }
    />
  );
}
