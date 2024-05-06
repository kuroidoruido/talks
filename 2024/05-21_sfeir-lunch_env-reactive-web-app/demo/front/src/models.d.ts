declare interface GetAccountApi {
  account: Account;
}

declare interface GetTransactionApi {
  transactions: Transaction[];
}

declare interface GetCardApi {
  card: Card;
}

declare interface GetAssistantApi {
  result: string;
}

declare interface Account {
  name: string;
  adress: string;
  phoneNumber: string;
  email: string;
  birthdate: string;
  iban: string;
  balance: number;
  lastTransactions: Transaction[];
}

declare interface Transaction {
  date: string;
  label: string;
  amount: number;
  paymentMethod: string;
}

declare interface Card {
  cardNumber: string;
  holderName: string;
  expirationDate: string;
  cvv: string;
  cardType: string;
  contactLessEnabled: boolean;
}
