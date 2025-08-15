# Desafio Técnico Cypress - Academia Accenture 2025

Este projeto foi desenvolvido como parte do desafio técnico da Academia Accenture, com o objetivo de demonstrar habilidades na automação de testes de interface web utilizando Cypress e boas práticas de desenvolvimento de software e QA.

## 🎯 Objetivo

O projeto realiza a automação de cenários de teste na página de "Web Tables" do site de demonstração [DemoQA](https://demoqa.com/webtables), cobrindo tanto o fluxo principal de funcionalidades quanto cenários de validação de erros.

## ✨ Cenários Automatizados

A suíte de testes está dividida em duas features principais para melhor organização e manutenibilidade:

**1. `webTables.feature` (Cenário de Sucesso - "Caminho Feliz")**
* Valida o ciclo de vida completo de um registro (CRUD - Create, Read, Update, Delete).
* Utiliza dados dinâmicos gerados pela biblioteca **Faker.js** para garantir que cada execução seja única e robusta.
* Valida cada etapa (cadastro, edição e exclusão) de forma individual e sequencial.

**2. `formValidations.feature` (Cenários de Validação - "Caminho Negativo")**
* Valida o comportamento do formulário ao tentar submeter dados inválidos.
* Cobre o teste de submissão com um campo obrigatório (Sobrenome) em branco.
* Cobre o teste de submissão com um formato de e-mail inválido (sem "@").
* Utiliza uma massa de dados estática e controlada via **Fixtures** para garantir a previsibilidade dos testes de erro.

## 🛠️ Tecnologias e Arquitetura

* **Framework de Teste:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript
* **BDD (Behavior-Driven Development):**
    * **Gherkin:** para a escrita declarativa das especificações em arquivos `.feature`.
    * **Cucumber:** integração com o Cypress através do plugin `cypress-cucumber-preprocessor`.

* **Padrão de Projeto e Boas Práticas:**
    * **Custom Commands:** Toda a lógica de interação com a página foi abstraída em comandos customizados do Cypress. Os comandos foram separados por responsabilidade (CRUD vs. Validações) em arquivos distintos dentro da pasta `support/pages`, mantendo o código limpo e organizado.
    * **Estratégia de Dados Híbrida:** O projeto utiliza **Faker.js** para dados dinâmicos no caminho feliz (aumentando a robustez) e **Fixtures** para dados estáticos nos caminhos negativos (garantindo a previsibilidade).
    * **Tratamento de Dados Sensíveis:** Foi implementado um comando utilitário global `cy.typeSensitive()` que utiliza a opção `{ log: false }` para garantir que dados pessoais (sobrenome, e-mail, salário, etc.) não sejam expostos nos logs, screenshots ou vídeos da execução.
    * **Constantes para Waits:** Foram criadas constantes para os tempos de espera (`cy.wait()`), evitando o uso de "números mágicos" e melhorando a legibilidade e manutenção do código.

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes softwares instalados:

* [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
* [Git](https://git-scm.com/) (para clonar o repositório)

## 🚀 Como Executar

1.  **Clone o repositório para a sua máquina local:**
    ```bash
    git clone (https://github.com/JavanFA/desafio-cypress-accenture.git)
    ```

2.  **Navegue até o diretório raiz do projeto:**
    ```bash
    cd desafio-cypress-accenture
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

4.  **Execute o Cypress em modo interativo (Test Runner):**
    ```bash
    npx cypress open
    ```

5.  Na interface do Cypress que se abrirá, você verá os dois arquivos listados: `formValidations.feature` e `webTables.feature`. Clique em qualquer um deles para iniciar a execução.

---
