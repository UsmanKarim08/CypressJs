/// <reference types="cypress" />
 describe('login ', () => {
   beforeEach(()=> {
    cy.visit('/');
   })
   
        let user= {
        
            "username" : "admin",
            "password" : "admin123",
            "invalidusername" : "admin123",
            "invalidpassword" : "admin456"
        }
            

    it('should have valid log in', () => {
        
        cy.contains('Login')
        cy.get('[name="username"]').type(user.username);
        cy.get("[type='password']").type(user.password)
        cy.get("button[type='submit']").click();
        cy.url().should('contain', '/dashboard/index')
        cy.contains('Admin').should('be.visible').click()
        cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click();
    })

    it ('should do invalid login', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.contains('Login')
cy.get('[name="username"]').type(user.invalidusername);
cy.get("[type='password']").type(user.invalidpassword);
cy.get("button[type='submit']").click();
cy.contains('Invalid credentials').should('be.visible')
    })
    





 })