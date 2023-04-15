import login from "../pageobject/login.po";
import dashboard from "../pageobject/dashboard/dashboard.po";
 describe('login ', () => {
   beforeEach(()=> {
    cy.visit('/');
    login.loginWithCred();
   })
   
    it('should see dashboard', () => {
        
        cy.get(dashboard.constdashBoardValidation).should('be.visible');
        
    })

    





 })