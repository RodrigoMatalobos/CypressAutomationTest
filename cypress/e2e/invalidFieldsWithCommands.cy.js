describe('invalid fields', () => {
  
  beforeEach(() => {
    cy.visit('https://institutoweb.com.ar/test/test2/checkout/');
    cy.get('div[class*="text-center"]')
      .children()
      .contains('Checkout form')
      .should('exist');
    cy.get('#continue').click();
  })

  it('invalid Fields Validation', () => {

    cy.get('#email')
    .click()
    .type('---')

    cy.invalidFields('#firstName', 'Valid first name is required.')
    cy.invalidFields('#lastName', 'Valid last name is required.')
    cy.invalidFields('#username', 'Your username is required.')
    cy.invalidFields('#address', 'Please enter your shipping address.')
    cy.invalidFields('#country', 'Please select a valid country.')
    cy.invalidFields('#state', 'Please provide a valid state.')
    cy.invalidFields('#zip', 'Zip code required.')
    cy.invalidFields('#cc-name', 'Name on card is required')
    cy.invalidFields('#cc-number', 'Credit card number is required')
    cy.invalidFields('#cc-expiration', 'Expiration date required')
    cy.invalidFields('#cc-cvv', 'Security code required')
    cy.invalidFields('#email', 'Please enter a valid email')
  })
})