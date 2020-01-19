describe('Verify Elements Test', function() {

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

  it('Accept Cookies', function() {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('$(...).iCheck is not a function')
  
      // return false to prevent the error from
      // failing this test
      return false
    })
    
    cy.get('.cc-btn')
      .click()
  })

  it('verify Mailinator Header', function() {  
    cy.get('.site_title > span').should('contain', 'Mailinator')

  })

  it('Verify Public Mailinator Header', function() {
    cy.get('.menu_section > :nth-child(1) > :nth-child(1) > div').should('contain', 'Public Mailinator')
  })

  it('Verify Public Inboxes Button', function() {
    cy.get('.menu_section > :nth-child(1) > :nth-child(2) > a').should('contain', 'Public Inboxes')
  })

  it('Verify Public SMS Button', function() {
    cy.get(':nth-child(1) > :nth-child(3) > a').should('contain', 'Public SMS')
  })

  it('Verify Pricing Button', function() {
    cy.get(':nth-child(2) > :nth-child(1) > a').should('contain', 'Pricing')
  })

  it('Logout', function() {
    cy.wait(2000)
    cy.contains('LOGIN')
      .click()

    cy.get('h1').should('contain', 'Subscriber Login')
  })
})
