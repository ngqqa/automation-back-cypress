describe('Cenário 707613: Autenticar com sucesso na API do Disque Denúncia', () => {
  it('Então a autenticação deve ser realizada com sucesso', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.typeform.com/me',
      failOnStatusCode: false,
    }).should(({ status, body }) => {
      expect(status).to.equal(200)
      expect(body).includes("200")      
    })
  })

  it('Cenário 707616: Realizar consultas periódicas à API do DD', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.typeform.com/me',
      headers: { authorization: 'Bearer 0123456789abcdefghijklmnopqrsvwxyz' },
      failOnStatusCode: false,
    }).should(({ status, body }) => {
      expect(status).to.equal(200)
      expect(body).includes("200")
    })
  })

  it('Falha com status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://walmyr.dev/invalid-123',
      failOnStatusCode: false,
    }).should(({ status, statusText }) => {
      expect(status).to.equal(404)
      expect(statusText).to.equal('Not Found')
    })
  })
})
