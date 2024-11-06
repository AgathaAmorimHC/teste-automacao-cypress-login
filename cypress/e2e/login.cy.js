describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '.oxd-button',
    toppbarField: ".oxd-topbar",
    failtoppbarField:'.oxd-alert'
  }

  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type ('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click ()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.toppbarField).contains('Dashboard')
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type ('gath')
    cy.get(selectorList.passwordField).type('gath123')
    cy.get(selectorList.loginButton).click ()
    cy.get(selectorList.failtoppbarField)
    
  })
})
