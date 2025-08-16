import { TABLE_BODY } from './registrationForm.page'


Cypress.Commands.add('excluirTodosOsRegistros', () => {
    cy.get(TABLE_BODY).then($body => {
        if ($body.find('[id^="delete-record-"]').length > 0) {
            cy.get('[id^="delete-record-"]').first().click()
            cy.excluirTodosOsRegistros()
        }
    })
})


Cypress.Commands.add('validarTabelaVazia', () => {
    cy.get('.rt-noData').should('be.visible').and('contain.text', 'No rows found')
})