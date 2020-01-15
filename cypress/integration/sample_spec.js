describe('My First Test', function() {
  let username, password;

  before(() => {
    username = Cypress.env('username')
    password = Cypress.env('password')
  })
  
  it('Visit Mailinator site', function() {
    cy.visit('https://www.mailinator.com/')

    cy.get('.nav-login')
      .click()

    cy.get('#many_login_email')
      .type(username)

    cy.get('#many_login_password')
      .type(password)

    cy.get('.btn')
      .click()
    
    cy.get('#many_login_error')
    //add assertion of error message
    // "Invalid Email or Password"
  })
})