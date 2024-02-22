import { dumbApi } from './dumb-api';

dumbApi({
  name: 'Accounts API',
  port: 9200,
  dependsOn: [{ name: 'Transactions API', url: 'http://localhost:9100', optional: true }],
  on({ path }) {
    if (path.startsWith('/api/v1/accounts/')) {
      const clientId = Number.parseInt(path.substring(path.lastIndexOf('/') + 1), 10);
      return {
        account: DB[clientId],
      };
    }
  },
});

const DB = {
  1: {
    name: 'Julien Dupont',
    adress: '3 Rue des Gamers, 44000 Nantes, France',
    phoneNumber: '+33 7 65 43 21 09',
    email: 'julien.dupont@email.com',
    birthdate: '01/01/1990',
    iban: 'FR234567890123456789012345',
    balance: 5000.0,
    lastTransactions: [
      {
        date: '15/02/2024',
        label: 'Steam - Elden Ring',
        amount: 59.99,
        paymentMethod: 'Carte bancaire',
      },
      {
        date: '08/02/2024',
        label: 'Amazon - Figurine Dark Vador 30cm',
        amount: 49.99,
        paymentMethod: 'PayPal',
      },
      {
        date: '01/02/2024',
        label: 'PlayStation Plus - Abonnement 1 an',
        amount: 59.99,
        paymentMethod: 'Prélèvement automatique',
      },
    ],
  },
  2: {
    name: 'Martine Durand',
    adress: '12 Rue du Village, 44000 Nantes, France',
    phoneNumber: '+33 2 40 86 54 32',
    email: 'martine.durand@email.com',
    birthdate: '14/05/1945',
    iban: 'FR123456789012345678901234',
    balance: 12500.0,
    lastTransactions: [
      {
        date: '15/02/2024',
        label: 'Intermarché - Courses alimentaires',
        amount: 50.0,
        paymentMethod: 'Carte bancaire',
      },
      {
        date: '08/02/2024',
        label: 'La Poste - Affranchissement colis',
        amount: 8.5,
        paymentMethod: 'Espèces',
      },
      {
        date: '01/02/2024',
        label: "EDF - Facture d'électricité",
        amount: 120.0,
        paymentMethod: 'Prélèvement automatique',
      },
    ],
  },
} as const;
