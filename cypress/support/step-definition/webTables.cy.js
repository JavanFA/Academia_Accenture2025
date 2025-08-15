import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('que eu acesse a página de Web Tables', () => {
    cy.visit('/webtables')
})

When('eu realizo o cadastro de um novo registro', () => {
    cy.realizarCadastro()
})

And('realizo a edição deste mesmo registro', () => {
    cy.realizarEdicao()
})

And('por fim, realizo a exclusão do registro', () => {
    cy.realizarExclusao()
})

Then('o registro não deve mais ser encontrado na tabela', () => {
    cy.validarExclusaoNaTabela()
})