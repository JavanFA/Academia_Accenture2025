# Desafio Técnico Cypress - Academia Accenture 2025

Este projeto foi desenvolvido como parte do desafio técnico da Academia Accenture, com o objetivo de demonstrar habilidades na automação de testes de interface web utilizando Cypress e boas práticas de desenvolvimento de software e QA.

## 🎯 Objetivo

O projeto realiza a automação de cenários de teste na página de "Web Tables" do site de demonstração [DemoQA](https://demoqa.com/webtables), cobrindo o fluxo principal de funcionalidades, cenários de validação de erros e manipulação de dados existentes.

## ✨ Cenários Automatizados

A suíte de testes está dividida em pastas por tipo de cenário para máxima organização e clareza, permitindo a execução seletiva dos testes.

### Cenários Positivos (`cypress/e2e/positivo/`)
* **`webTables.feature`**: Valida o ciclo de vida completo de um registro (CRUD), utilizando dados dinâmicos gerados pela biblioteca **Faker.js**.
* **`deleteRecords.feature`**: Testa a exclusão de todos os registros pré-existentes na tabela, validando que a tabela fica vazia ao final.

### Cenários Negativos (`cypress/e2e/negativo/`)
* **`formValidations.feature`**: Valida o comportamento do formulário ao tentar submeter dados inválidos, como campos obrigatórios em branco e formatos de e-mail incorretos, utilizando uma massa de dados estática via **Fixtures**.

## 🛠️ Tecnologias e Arquitetura

* **Framework de Teste:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript
* **BDD (Behavior-Driven Development):**
    * **Gherkin:** para a escrita declarativa das especificações em arquivos `.feature`.
    * **Cucumber:** integração com o Cypress através do plugin `cypress-cucumber-preprocessor`.
* **Padrão de Projeto e Boas Práticas:**
    * **Custom Commands Modulares:** A lógica de interação com a página foi abstraída em comandos customizados do Cypress. Estes comandos foram modularizados e separados por responsabilidade em arquivos distintos na pasta `support/pages/`, como `registrationForm.page.js` e `deleteTable.page.js`.
    * **Estratégia de Dados Híbrida:** O projeto utiliza **Faker.js** para dados dinâmicos nos testes de caminho feliz e **Fixtures** para dados estáticos e controlados nos testes de caminho negativo.
    * **Tratamento de Dados Sensíveis:** Foi implementado um comando utilitário `cy.typeSensitive()` que utiliza a opção `{ log: false }` para garantir que dados pessoais não sejam expostos nos logs ou vídeos da execução.

## 🌳 Estrutura de Arquivos

O projeto segue uma estrutura organizada para facilitar a manutenção e escalabilidade:

DESAFIO-CYPRESS/
├── cypress/
│   ├── e2e/
│   │   ├── validacoes/           # Testes de validação e erro
│   │   │   └── formValidations.feature
│   │       ├── deleteRecords.feature
│   │   └── crud/                # Testes de fluxo principal
│   │       └── webTables.feature
│   │
│   ├── fixtures/                # Massa de dados estática
│   │   └── userData.json
│   │
│   └── support/                 # Arquivos de suporte e configuração
│       ├── pages/               # Módulos com a lógica dos comandos
│       │   ├── deleteTable.page.js
│       │   ├── registrationForm.page.js
│       │   └── registrationValidation.page.js
│       │
│       ├── step_definition/     # "Cola" entre Gherkin e os comandos
│       │   ├── deleteRecords.cy.js
│       │   ├── formValidations.cy.js
│       │   └── webTables.cy.js
│       │
│       ├── commands.js          # Carregador central dos módulos de comandos
│       └── e2e.js               # Configurações globais (ex: handler de exceção)
│
├── .gitignore
├── cypress.config.js
└── package.json

## 📋 Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
* [Git](https://git-scm.com/)

## 🚀 Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/JavanFA/Academia_Accenture2025.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Academia_Accenture2025
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Abra o Cypress Test Runner:**
    ```bash
    npx cypress open
    ```

5.  Na interface do Cypress, você verá a estrutura de pastas `crud` e `validacoes`. Clique em qualquer um dos três arquivos `.feature` para iniciar a execução.