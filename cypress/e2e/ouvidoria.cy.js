
describe('Integração Ouvidoria - Token + POST', () => {
  it('Obtém token e faz POST na API protegida', () => {
    cy.getTokenOuvidoria().then((token) => {
      cy.request({
        method: 'POST', // aqui é POST, conforme sua API
        url: 'https://sso-stage.mprj.mp.br/realms/MPRJ-DEV/protocol/openid-connect/token', // ajuste para sua rota real
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
        body: {
          // payload do POST
          mensagem: 'Teste de integração',
          origem: 'Cypress',
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200); // ou 201, dependendo da API
        cy.log('Resposta:', JSON.stringify(resp.body));
      });
    });
  });
});
