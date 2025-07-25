
# Automação de Login | Cypress + Page Object Model (POM)

Este projeto automatiza os testes de login no sistema **OrangeHRM**, utilizando o framework **Cypress** e o padrão de projeto **Page Object Model (POM)**.

### Demonstração

Abaixo, um exemplo real de execução automatizada rodando via Cypress:
![Demonstração do teste](./assets/gif/login.gif)



##  Funcionalidade Testada

**Login no sistema OrangeHRM**

URL: [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)

##  Cenários de Teste Implementados

1. **Login com credenciais válidas**  
   Verifica se o usuário consegue acessar o sistema com nome de usuário e senha corretos.

2. **Login com nome de usuário inválido**  
   Valida a exibição de mensagens de erro ao inserir um nome de usuário incorreto.

3. **Login com senha inválida**  
   Garante que o sistema emite alerta quando a senha está incorreta.

4. **Login com campos vazios**  
   Verifica a validação do formulário e mensagens de erro quando o botão de login é pressionado sem preencher os campos.

---

## 📂 Estrutura de Pastas

```
cypress/
├── e2e/
│   └── login.cy.js            # Testes automatizados
├── support/
│   └── commands.js
│   └── e2e.js
├── pages/
│   └── loginPage.js           # Page Object do Login
assets/
└── demo-login.mp4             # Gravação da execução dos testes
```

---

##  Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Page Object Model

---

## 📂 Como Executar

```bash
# Instalar dependências
npm install

# Abrir o Cypress com interface
npx cypress open

# Ou rodar diretamente via terminal
npx cypress run
```

---

##  Observações:

- Este projeto foi desenvolvido com foco em **boas práticas de automação** e clareza de código.
- A estrutura modular com POM permite escalabilidade para futuros testes automatizados.

---

Desenvolvido por [Agatha Amorim](https://github.com/AgathaAmorimHC)
