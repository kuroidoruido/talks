import { dumbApi } from './dumb-api';

dumbApi({
  name: 'Transactions API',
  port: 9100,
  on({ path }) {
    if (path.startsWith('/api/v1/transactions/')) {
      const criticalFail = Math.ceil(Math.random() * 6) === 6;
      if (criticalFail) {
        throw new Error('Critical fail! ⚅😈');
      }
      const clientId = path.substring(path.lastIndexOf('/') + 1);
      return {
        transactions: DB[clientId],
      };
    }
  },
});

const DB = {
  FR234567890123456789012345: [
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
    {
      date: '25/01/2024',
      label: 'Twitch - Don à [Nom du streamer]',
      amount: 5.0,
      paymentMethod: 'Carte bancaire',
    },
    {
      date: '10/01/2024',
      label: 'Inscription tournoi E-sport League of Legends',
      amount: 20.0,
      paymentMethod: 'Virement bancaire',
    },
    {
      date: '05/03/2024',
      label: 'LDLC - Nouvelle carte graphique',
      amount: 300.0,
      paymentMethod: 'Carte bancaire',
    },
    {
      date: '12/11/2023',
      label: 'Humble Bundle - Pack de jeux vidéo indie',
      amount: 15.0,
      paymentMethod: 'PayPal',
    },
    {
      date: '22/10/2023',
      label: "Micromania - Achat d'occasion : PS5",
      amount: 450.0,
      paymentMethod: 'Carte bancaire',
    },
    {
      date: '05/09/2023',
      label: 'Netflix - Abonnement mensuel',
      amount: 13.99,
      paymentMethod: 'Prélèvement automatique',
    },
    {
      date: '18/08/2023',
      label: "Google Play Store - Achat d'applications mobiles",
      amount: 10.99,
      paymentMethod: 'Google Pay',
    },
    {
      date: '01/07/2023',
      label: "Vente de jeux vidéo d'occasion sur eBay",
      amount: 30.0,
      paymentMethod: 'Virement PayPal',
    },
  ],
  FR123456789012345678901234: [
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
    {
      date: '25/01/2024',
      label: 'Pharmacie - Achat de médicaments',
      amount: 25.0,
      paymentMethod: 'Carte bancaire',
    },
    {
      date: '10/01/2024',
      label: 'Fleuriste - Bouquet de fleurs pour anniversaire',
      amount: 30.0,
      paymentMethod: 'Espèces',
    },
  ],
} as const;
