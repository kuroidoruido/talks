interface TransactionsTableProps {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Libellé</th>
          <th scope="col">Date</th>
          <th scope="col">Montant</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.label}>
            <td>{transaction.label}</td>
            <td>{transaction.date}</td>
            <td>{transaction.amount.toFixed(2)}€</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
