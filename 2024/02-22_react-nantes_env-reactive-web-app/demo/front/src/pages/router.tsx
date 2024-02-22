import { createRouter } from "@swan-io/chicane";
import { match } from "ts-pattern";
import { TransactionsPage } from "./Transactions.page";
import { CardsPage } from "./Cards.page";
import { DashboardPage } from "./Dashboard.page";

export const Router = createRouter({
  Home: "/",
  Transactions: "/transactions",
  Cards: "/cards",
});

export function AppRouter() {
  const route = Router.useRoute(["Home", "Transactions", "Cards"]);

  return match(route)
    .with({ name: "Home" }, () => <DashboardPage />)
    .with({ name: "Cards" }, () => <CardsPage />)
    .with({ name: "Transactions" }, () => <TransactionsPage />)
    .otherwise(() => <>Oups... Yours lost... 🙊</>);
}
