const URLHOME = 'https://sistemtoko.com/login'
const URLFORGOT = 'https://sistemtoko.com/forgot'
const EMAIL = 'input[name="email"]'
const PASSWORD = 'input[name="password"]'
const LOGIN = '#login > .btn'


class LoginPage{

    static visit(){
        cy.visit(URLHOME)
    }
    static visitForgot(){
        cy.visit(URLFORGOT)
    }
    static singin(email,password){
        cy.get(EMAIL).type(email)
        cy.get(PASSWORD).type(password)
        cy.get(LOGIN).click()
    }
    static forgot(email){
        cy.get(EMAIL).type(email)
        cy.get(':nth-child(3) > .btn').click()
    }

}
export default LoginPage