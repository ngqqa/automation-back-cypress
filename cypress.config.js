
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // opcional: confirme que o supportFile está habilitado e apontando para e2e.js
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://sso-stage.mprj.mp.br/realms/MPRJ-DEV/protocol/openid-connect/token', // ajuste se for chamar sua API local
  },
});
