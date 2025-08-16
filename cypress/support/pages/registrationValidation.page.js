import { INPUT_LAST_NAME, INPUT_EMAIL, BTN_ADD, INPUT_FIRST_NAME, INPUT_AGE, INPUT_SALARY, INPUT_DEPARTMENT, BTN_SUBMIT } from './registrationForm.page'



Cypress.Commands.add('realizarCadastroSemSobrenome', () => {
    cy.fixture('userData').then((user) => {
        cy.get(BTN_ADD).click()
        cy.get(INPUT_FIRST_NAME).type(user.firstName)
        cy.get(INPUT_EMAIL).type(user.email)
        cy.get(INPUT_AGE).type(user.age)
        cy.get(INPUT_SALARY).type(user.salary)
        cy.get(INPUT_DEPARTMENT).type(user.department)
        cy.get(BTN_SUBMIT).click()
    })
})



Cypress.Commands.add('realizarCadastroEmailInvalido', () => {
    cy.fixture('userData').then((user) => {
        cy.get(BTN_ADD).click()
        cy.get(INPUT_FIRST_NAME).type(user.firstName)
        cy.get(INPUT_LAST_NAME).type(user.lastName)
        cy.get(INPUT_EMAIL).type(user.invalidEmail)
        cy.get(INPUT_AGE).type(user.age)
        cy.get(INPUT_SALARY).type(user.salary)
        cy.get(INPUT_DEPARTMENT).type(user.department)
        cy.get(BTN_SUBMIT).click()
    })
})



Cypress.Commands.add('realizarCadastroSalarioNegativo', () => {
    cy.fixture('userData').then((user) => {
        cy.get(BTN_ADD).click()
        cy.get(INPUT_FIRST_NAME).type(user.firstName)
        cy.get(INPUT_LAST_NAME).type(user.lastName)
        cy.get(INPUT_EMAIL).type(user.email)
        cy.get(INPUT_AGE).type(user.age)
        cy.get(INPUT_SALARY).type(user.negativeSalary)
        cy.get(INPUT_DEPARTMENT).type(user.department)
        cy.get(BTN_SUBMIT).click()
    })
})



Cypress.Commands.add('validarErroNoCampo', (selector) => {
    cy.get(selector).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})