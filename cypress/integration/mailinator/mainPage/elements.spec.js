let username, password;

  before(() => {
    username = Cypress.env('username')
    password = Cypress.env('password')
  })
  
  it('Visit Mailinator site', function() {
    cy.visit('https://www.mailinator.com/')
  })
  
  it('Enter Login Credentials and Press Login', function() {
    cy.get('.nav-login')
      .click()

    cy.get('#many_login_email')
      .type(username)

    cy.get('#many_login_password')
      .type(password)

    cy.get('.btn')
      .click()
  })


it('verify Mailinator Header', function() {
    cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('$(...).iCheck is not a function')
        
            // return false to prevent the error from
            // failing this test
            return false
          })
    
    cy.get('.site_title > span').should('contain', 'Mailinator')
})
