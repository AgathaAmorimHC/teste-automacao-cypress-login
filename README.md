# Teste de Automação de Login - Cypress

Este repositório contém um projeto de automação de testes utilizando **Cypress** para validar o fluxo de login no site [OrangeHRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login). O objetivo é demonstrar a automação de testes E2E com foco em qualidade, manutenção de código e boas práticas.

---

##  Demonstração do Teste

![Demonstração do teste](./media/login.gif)

---

## 📂 Estrutura do Projeto

```bash
📁 cypress
│   ├── 📁 e2e
│   │    └── login.cy.js        # Testes de login
│   ├── 📁 support
│   │    ├── commands.js        # Comandos customizados (futuros)
│   │    └── e2e.js             # Pré-configuração dos testes
│
├── 📁 media                    # Evidências em GIF dos testes
│
├── cypress.config.js          # Configuração do Cypress
└── package.json               # Dependências e scripts
```

---

##  Testes Implementados

O arquivo `login.cy.js` cobre os seguintes cenários:

1. **Login com credenciais válidas**
2. **Login com credenciais inválidas**
3. **Login com campos vazios**
4. **Login com usuário válido e senha errada**

Todos os testes estão implementados com Cypress usando boas práticas como:

* Comandos organizados
* Separação de responsabilidades
* Assertivas claras e diretas

---

##  Como rodar os testes

### 1. Clone o repositório

```bash
git clone https://github.com/AgathaAmorimHC/teste-automacao-cypress-login.git
cd teste-automacao-cypress-login
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o Cypress

```bash
npx cypress open
```

Ou rode em modo headless:

```bash
npx cypress run
```

---

## 🛠 Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) v13+
* JavaScript (ES6)
* Node.js
* VSCode

---

##  Próximos passos

* Refatorar para usar o padrão Page Object Model (POM)
* Implementar comandos customizados
* Adicionar testes negativos adicionais (ex: campos com espaço)
* Adicionar integração contínua (CI) com GitHub Actions

---

##  Autora

Agatha Siqueira de Amorim
[GitHub](https://github.com/AgathaAmorimHC) • [LinkedIn](https://www.linkedin.com/in/agatha-amorim/)

---

**Status:** ✅ Projeto em desenvolvimento com base em estudos guiados de QA e automação de testes.

**Licença:** Livre para fins de aprendizado e portfólio.
