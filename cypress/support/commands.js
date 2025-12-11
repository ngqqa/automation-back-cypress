
import { TokenService } from './services/tokenService';

const tokenService = new TokenService();

// Defina fora de describe/it:
Cypress.Commands.add('getTokenOuvidoria', () => tokenService.getToken());

Cypress.Commands.add('ouvidoriaAuthHeaders', () =>
  tokenService.getToken().then((token) => ({
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
  }))
);
