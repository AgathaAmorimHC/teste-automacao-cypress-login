import LoginPage from '../support/pages/LoginPage';



const validUsername = 'Admin';
const validPassword = 'admin123';
const invalidPassword = 'senhaIncorreta123';

describe('Testes de Login - OrangeHRM', () => {

  it('Deve exibir erro ao tentar logar com campos vazios', () => {
    LoginPage.visit();
    LoginPage.submit();
    LoginPage.checkErrorMessage('Required');
  });

  it('Deve exibir erro ao tentar login com senha incorreta', () => {
    LoginPage.visit();
    LoginPage.fillUsername(validUsername);
    LoginPage.fillPassword(invalidPassword);
    LoginPage.submit();
    LoginPage.checkInvalidCredentials();
  });

  it('Deve logar com sucesso usando credenciais válidas', () => {
    LoginPage.visit();
    LoginPage.fillUsername(validUsername);
    LoginPage.fillPassword(validPassword);
    LoginPage.submit();
    LoginPage.checkSuccessfulLogin();
  });

  it('Login com campos em branco', () => {
    LoginPage.visit();
    LoginPage.fillUsername('');
    LoginPage.fillPassword('');
    LoginPage.submit();
    LoginPage.checkErrorMessage('Required');
  });

});

