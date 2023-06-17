describe('template spec', () => {
  

  it('login', () => {
    cy.visit('https://institutoweb.com.ar/test/test2/checkout/');
    cy.get("#continue").click();
  })
})