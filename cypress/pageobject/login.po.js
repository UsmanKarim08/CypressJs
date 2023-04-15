class logInPage {
    landingPageValidation=  'img[alt="company-branding"]';
       userNameInputField(){
        return 'input[name="username"]'
    }
    passwordInputField(){
        return'input[name="password"]'
    }
    clickLoginButton(){
        return "button[type='submit']"
    }
    loginerrorMessage(){
        return 'Invalid credentials'
    }
    loginWithCred(){
        cy.get(this.userNameInputField()).type(Cypress.env('userName1'));
        cy.get(this.passwordInputField()).type(Cypress.env('password1'));
        cy.get(this.clickLoginButton()).click();

    }
}
const login = new logInPage
export default login