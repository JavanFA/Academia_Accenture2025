import { faker } from '@faker-js/faker'

export const BTN_ADD = '#addNewRecordButton'
export const INPUT_FIRST_NAME = '#firstName'
export const INPUT_LAST_NAME = '#lastName'
export const INPUT_EMAIL = '#userEmail'
export const INPUT_AGE = '#age'
export const INPUT_SALARY = '#salary'
export const INPUT_DEPARTMENT = '#department'
export const BTN_SUBMIT = '#submit'
export const TABLE_BODY = '.rt-tbody'

const TYPE_DELAY = 50       
const VISUALIZATION_WAIT = 1000 


Cypress.Commands.add('realizarCadastro', () => {
    const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 80 }).toString(),
        salary: faker.finance.amount({ min: 1000, max: 15000, dec: 0 }),
        department: faker.commerce.department()
    }
    cy.wrap(userData).as('currentUser')

    cy.get(BTN_ADD).click()
    cy.get(INPUT_FIRST_NAME).type(userData.firstName, { delay: TYPE_DELAY })
    cy.typeSensitive(INPUT_LAST_NAME, userData.lastName, { delay: TYPE_DELAY })
    cy.typeSensitive(INPUT_EMAIL, userData.email, { delay: TYPE_DELAY })
    cy.typeSensitive(INPUT_AGE, userData.age, { delay: TYPE_DELAY })
    cy.typeSensitive(INPUT_SALARY, userData.salary, { delay: TYPE_DELAY })
    cy.get(INPUT_DEPARTMENT).type(userData.department, { delay: TYPE_DELAY })
    
    cy.get(BTN_SUBMIT).click()
    cy.wait(VISUALIZATION_WAIT)
})

Cypress.Commands.add('validarRegistroNaTabela', () => {
    cy.get('@currentUser').then((user) => {
        cy.get('.rt-tr-group').contains(user.firstName).parent().within(() => {
            cy.get('.rt-td').eq(1).should('contain.text', user.lastName)
            cy.get('.rt-td').eq(3).should('contain.text', user.email)
        })
    })
})

Cypress.Commands.add('realizarEdicao', () => {
    cy.get('@currentUser').then((originalUser) => {
        const editedData = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email()
        }
        cy.wrap({ ...originalUser, ...editedData }).as('editedUser')

        cy.get(TABLE_BODY).contains('.rt-tr-group', originalUser.firstName).find('[id^="edit-record-"]').click()
        
        cy.get(INPUT_FIRST_NAME).clear().type(editedData.firstName, { delay: TYPE_DELAY })
        cy.get(INPUT_LAST_NAME).clear().type(editedData.lastName, { delay: TYPE_DELAY })
        cy.get(INPUT_EMAIL).clear().type(editedData.email, { delay: TYPE_DELAY })

        cy.get(BTN_SUBMIT).click()
        cy.wait(VISUALIZATION_WAIT)
    })
})

Cypress.Commands.add('validarEdicaoNaTabela', () => {
    cy.get('@editedUser').then((user) => {
        cy.get('.rt-tr-group').contains(user.firstName).parent().within(() => {
            cy.get('.rt-td').eq(1).should('contain.text', user.lastName)
            cy.get('.rt-td').eq(3).should('contain.text', user.email)
        })
    })
})

Cypress.Commands.add('realizarExclusao', () => {
    cy.get('@editedUser').then((user) => {
        cy.get(TABLE_BODY).contains('.rt-tr-group', user.firstName).find('[id^="delete-record-"]').click()
        cy.wait(VISUALIZATION_WAIT)
    })
})

Cypress.Commands.add('validarExclusaoNaTabela', () => {
    cy.get('@editedUser').then((user) => {
        cy.get(TABLE_BODY).should('not.contain', user.firstName)
    })
})