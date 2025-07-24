class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

 fillUsername(username) {
  const input = cy.get('input[name="username"]').clear();
  if (username) {
    input.type(username);
  }
}

fillPassword(password) {
  const input = cy.get('input[name="password"]').clear();
  if (password) {
    input.type(password);
  }
}


  submit() {
    cy.get('button[type="submit"]').click();
  }

  checkErrorMessage(message) {
    cy.get('.oxd-input-field-error-message').should('contain', message);
  }

  checkInvalidCredentials() {
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  }

  checkSuccessfulLogin() {
    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');
  }
}

export default new LoginPage();
