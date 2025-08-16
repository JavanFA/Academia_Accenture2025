import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('que eu acesse a página de Web Tables com os registros padrão', () => {
    cy.visit('/webtables');
})

When('eu excluo todos os registros existentes', () => {
    cy.excluirTodosOsRegistros();
})

Then('a tabela deve exibir a mensagem "No rows found"', () => {
    cy.validarTabelaVazia();
})