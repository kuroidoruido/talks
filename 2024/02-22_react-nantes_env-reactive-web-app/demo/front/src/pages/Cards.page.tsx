import { useEnv } from "../hooks/useEnv";
import { useFetch } from "../hooks/useFetch";

export function CardsPage() {
  return (
    <>
      <h1>Card</h1>
      <DataZone />
    </>
  );
}

function DataZone() {
  const env = useEnv();
  const card = useFetch<GetCardApi>({
    url: env.config.apiUrl + "/api/v1/cards/1",
  });

  if (!card?.card) {
    if (!env.toggles.dynamic.cards) {
      return (
        <article className="pico-background-sand-200 pico-color-red-750">
          On répare au plus vite ! 🚑
        </article>
      );
    }

    return <article aria-busy="true">On cherche votre carte... 🕵🏾‍♀️</article>;
  }

  return (
    <article>
      <ul>
        <li>{card.card.cardNumber}</li>
        <li>{card.card.cvv}</li>
        <li>{card.card.expirationDate}</li>
        <li>{card.card.holderName}</li>
        <li>{card.card.cardType}</li>
        <li>
          Paiement sans contact:{" "}
          {card.card.contactLessEnabled ? "Activé" : "Désactivé"}
        </li>
      </ul>
    </article>
  );
}
