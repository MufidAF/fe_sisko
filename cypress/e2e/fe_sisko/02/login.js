///<reference types="cypress"/>
import LoginPage from './login.page.js';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

//valid login
Given('User open login page', () => {
    LoginPage.visit();
})

//The user login with a valid email and password.
When('The user provides a correct email and password, and then presses the login button.', () => {

    cy.fixture("user").then((user) => {
        const email = user.email_valid
        const password = user.pw_valid
        LoginPage.singin(email, password)
    })
})

Then('The user will be directed to the store management page.', () => {
    cy.contains('PEMBAYARAN').should('contain', 'PEMBAYARAN')
})

//The user logs in with a valid email and an invalid password.
When('The user provides a correct email and incorrect password and then presses the login button.', () => {

    cy.fixture("user").then((user) => {
        const email = user.email_valid
        const password = user.pw_invalid
        LoginPage.singin(email, password)
    })
})

//The user logs in with a invalid email and an valid password.
When('The user provides a incorrect email and correct password and then presses the login button.', () => {

    cy.fixture("user").then((user) => {
        const email = user.email_valid
        const password = user.pw_invalid
        LoginPage.singin(email, password)
    })
})

//The user logs in with a invalid email and an invalid password.
When('The user provides a incorrect email and password and then presses the login button.', () => {

    cy.fixture("user").then((user) => {
        const email = user.email_invalid
        const password = user.pw_invalid
        LoginPage.singin(email, password)
    })
})

//asserstion
Then('Users will receive a notification that The email must be a valid email address.', () => {
    cy.get('#reason').should('contain.text', 'Username/Password did not match')
})

//The user has forgotten their password and is attempting to reset it using a valid email address.
Given('User open forgot password page', () => {
    LoginPage.visitForgot();
})
When('The user provides a correct email and then presses the Send Reminder button.', () => {

    cy.fixture("user").then((user) => {
        const email = user.email_valid
        LoginPage.forgot(email)
    })
})
Then('Users will receive a notification that The Password reminder sent!', () => {
    cy.get('.alert').should('contain.text', 'Password reminder sent!')
})

//The user has forgotten their password and is attempting to reset it using a invalid email address.

When('The user provides a incorrect email and then presses the Send Reminder button.', () => {

    cy.fixture("user").then((user) => {
        const email = user.email_invalid
        LoginPage.forgot(email)
    })
})
Then('Users will receive a notification that We cant find a user with that e-mail address!', () => {
    cy.get('.alert').should('contain.text', "We can't find a user with that e-mail address. !")
})
