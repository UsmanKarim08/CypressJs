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
    loginWithCred(username, password){
        cy.get(this.userNameInputField()).type(username);
        cy.get(this.passwordInputField()).type(password);
        cy.get(this.clickLoginButton()).click();

    }
}
const login = new logInPage
export default login