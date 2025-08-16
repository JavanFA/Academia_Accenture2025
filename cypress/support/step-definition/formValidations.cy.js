import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { INPUT_LAST_NAME, INPUT_EMAIL, INPUT_SALARY } from "../pages/registrationForm.page"

Given('que eu acesse a página de Web Tables', () => {
    cy.visit('/webtables')
})

When('eu tento realizar um cadastro sem o Sobrenome', () => {
    cy.realizarCadastroSemSobrenome()
})

Then('o formulário não deve ser submetido e o campo de Sobrenome deve indicar um erro', () => {
    cy.validarErroNoCampo(INPUT_LAST_NAME)
})



When('eu tento realizar um cadastro com um e-mail sem "@"', () => {
    cy.realizarCadastroEmailInvalido()
})

Then('o formulário não deve ser submetido e o campo de e-mail deve indicar um erro', () => {
    cy.validarErroNoCampo(INPUT_EMAIL)
})



When('eu tento realizar um cadastro com um salário negativo', () => {
    cy.realizarCadastroSalarioNegativo()
})

Then('o formulário não deve ser submetido e o campo de salário deve indicar um erro', () => {
    cy.validarErroNoCampo(INPUT_SALARY)
})