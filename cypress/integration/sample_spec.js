const login = require('../../vars');


describe('My First Test', function() {
  it('Visit Mailinator site', function() {
    cy.visit('https://www.mailinator.com/')

    cy.get('.nav-login')
      .click()

    cy.get('#many_login_email')
      .type(login.username)

    cy.get('#many_login_password')
      .type(login.password)

    cy.get('.btn')
      .click()
    
    cy.get('#many_login_error')
    //add assertion of error message
    // "Invalid Email or Password"
  })
})