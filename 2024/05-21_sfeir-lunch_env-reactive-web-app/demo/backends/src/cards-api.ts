import { dumbApi } from './dumb-api';

dumbApi({
  name: 'Cards API',
  port: 9300,
  on({ path }) {
    if (path.startsWith('/api/v1/cards/')) {
      const clientId = Number.parseInt(path.substring(path.lastIndexOf('/') + 1), 10);
      return {
        card: DB[clientId],
      };
    }
  },
});

const DB = {
  1: {
    cardNumber: '4932-1234-5678-9012',
    holderName: 'Julien Dupont',
    expirationDate: '12/25',
    cvv: '123',
    cardType: 'Visa',
    contactLessEnabled: true,
  },
  2: {
    cardNumber: '5123-4567-8901-2345',
    holderName: 'Martine Durand',
    expirationDate: '02/24',
    cvv: '456',
    cardType: 'Mastercard',
    contactLessEnabled: false,
  },
} as const;
