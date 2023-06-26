
describe('Some Test', () => {
  let data; //closure variable
  
  before(() => {
    cy.fixture('invalidFieldsFixture').then((fData) => {
        data = fData;
    });
  });

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

    cy.invalidFields(data.firstName, data.firstNameMessage)
    cy.invalidFields(data.lastName, data.lastNameMessage)
    cy.invalidFields(data.username, data.usernameMessage)
    cy.invalidFields(data.address, data.addressMessage)
    cy.invalidFields(data.country, data.countryMessage)
    cy.invalidFields(data.state, data.stateMessage)
    cy.invalidFields(data.zip, data.zipMessage)
    cy.invalidFields(data.ccname, data.ccnameMessage)
    cy.invalidFields(data.ccnumber, data.ccnumberMessage)
    cy.invalidFields(data.ccexpiration, data.ccexpirationMessage)
    cy.invalidFields(data.cccvv, data.cccvvMessage)
    cy.invalidFields(data.email, data.emailMessage)
  })


});
