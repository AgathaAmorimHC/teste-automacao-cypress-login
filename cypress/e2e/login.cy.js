describe('Orange HRM Tests', () => {
  it('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type ('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click ()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar").contains('Dashboard')
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type ('gath')
    cy.get("[name='password']").type('gath123')
    cy.get('.oxd-button').click ()
    cy.get('.oxd-alert')
    
  })
})
