import login from "../pageobject/login.po";
describe('login suite', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should be login with valid creds', () => {
        cy.get(login.landingPageValidation).should('be.visible')
        login.loginWithCred();
    })
})