describe('invalid fields', () => {
  
  beforeEach(() => {
    cy.visit('https://institutoweb.com.ar/test/test2/checkout/');
    cy.get('div[class*="text-center"]')
      .children()
      .contains('Checkout form')
      .should('exist');
    cy.get('#continue').click();
  })

  it('invalid First Name field', () => {  
    cy.get('#firstName')
      .parent()
      .within(()=>{
        
        cy.get('.invalid-feedback')
          .should('have.css', 'color', 'rgb(176, 42, 55)')
          .should('contain', 'Valid first name is required.')
        
        cy.get('#firstName')
          .should('have.css', 'border-color', 'rgb(220, 53, 69)')
          .should('have.css', 'background-image')
    })
  })

  it('invalid Last Name field', () => {  
    cy.get('#lastName')
      .parent()
      .within(()=>{
        
        cy.get('.invalid-feedback')
          .should('have.css', 'color', 'rgb(176, 42, 55)')
          .should('contain', 'Valid last name is required.')
        
        cy.get('#lastName')
          .should('have.css', 'border-color', 'rgb(220, 53, 69)')
          .should('have.css', 'background-image')
    })
  })

  it('invalid Username field', () => {  
    cy.get('#username')
      .parent()
      .within(()=>{
        
        cy.get('.invalid-feedback')
          .should('have.css', 'color', 'rgb(176, 42, 55)')
          .should('contain', 'Your username is required.')
        
        cy.get('#username')
          .should('have.css', 'border-color', 'rgb(220, 53, 69)')
          .should('have.css', 'background-image')
    })
  })

  it('invalid Email field', () => {  
    cy.get('#email')
      .click()
      .type('---')
      .parent()
      .within(()=>{
        
        cy.get('.invalid-feedback')
          .should('have.css', 'color', 'rgb(176, 42, 55)')
          .should('contain', 'Please enter a valid email')
        
        cy.get('input')
          .should('have.css', 'border-color', 'rgb(220, 53, 69)')
          .should('have.css', 'background-image')
    })
  })

  it('invalid Address field', () => {  
    cy.get('#address')
      .parent()
      .within(()=>{
        
        cy.get('.invalid-feedback')
          .should('have.css', 'color', 'rgb(176, 42, 55)')
          .should('contain', 'Please enter your shipping address.')
        
        cy.get('#address')
          .should('have.css', 'border-color', 'rgb(220, 53, 69)')
          .should('have.css', 'background-image')
    })
  })

  it('invalid country field', () => {  
    cy.get('#country')
      .parent()
      .within(()=>{
        
        cy.get('.invalid-feedback')
          .should('have.css', 'color', 'rgb(176, 42, 55)')
          .should('contain', 'Please select a valid country.')
        
        cy.get('#country')
          .should('have.css', 'border-color', 'rgb(220, 53, 69)')
          .should('have.css', 'background-image')
    })
  })

  it('invalid state field', () => {  
    cy.get('#state')
      .parent()
      .within(()=>{
        
        cy.get('.invalid-feedback')
          .should('have.css', 'color', 'rgb(176, 42, 55)')
          .should('contain', 'Please provide a valid state.')
        
        cy.get('#state')
          .should('have.css', 'border-color', 'rgb(220, 53, 69)')
          .should('have.css', 'background-image')
      })
    })

  it('invalid zip field', () => {  
    cy.get('#zip')
      .parent()
      .within(()=>{
        
        cy.get('.invalid-feedback')
          .should('have.css', 'color', 'rgb(176, 42, 55)')
          .should('contain', 'Zip code required.')
        
        cy.get('#zip')
          .should('have.css', 'border-color', 'rgb(220, 53, 69)')
          .should('have.css', 'background-image')
        })
      })
    it('invalid credit card field', () => {  
      cy.get('#cc-name')
        .parent()
        .within(()=>{
          
          cy.get('.invalid-feedback')
            .should('have.css', 'color', 'rgb(176, 42, 55)')
            .should('contain', 'Name on card is required')
          
          cy.get('#cc-name')
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')
            .should('have.css', 'background-image')
      })
    })

    it('invalid credit number field', () => {  
      cy.get('#cc-number')
        .parent()
        .within(()=>{
        
          cy.get('.invalid-feedback')
            .should('have.css', 'color', 'rgb(176, 42, 55)')
            .should('contain', 'Credit card number is required')
        
          cy.get('#cc-number')
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')
            .should('have.css', 'background-image')
        })
      })

    it('invalid Expiration field', () => {  
      cy.get('#cc-expiration')
        .parent()
        .within(()=>{
        
          cy.get('.invalid-feedback')
            .should('have.css', 'color', 'rgb(176, 42, 55)')
            .should('contain', 'Expiration date required')
        
          cy.get('#cc-expiration')
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')
            .should('have.css', 'background-image')
          })
        })   
    it('invalid Expiration field', () => {  
      cy.get('#cc-cvv')
        .parent()
        .within(()=>{
        
          cy.get('.invalid-feedback')
            .should('have.css', 'color', 'rgb(176, 42, 55)')
            .should('contain', 'Security code required')
        
          cy.get('#cc-cvv')
            .should('have.css', 'border-color', 'rgb(220, 53, 69)')
            .should('have.css', 'background-image')
          })
        })          
})