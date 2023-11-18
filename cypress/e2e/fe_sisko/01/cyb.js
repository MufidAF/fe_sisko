
import DataPage from './cyb.page.js';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

//UnderWight
Given ('The user opens the home page of fitbybeat.com', () =>{
    DataPage.visit();
})
When ('the user input underweight data and User clicks the calculate button',()=>{
    cy.fixture("data").then((data) => {
        const hight = data.hight
        const wight = data.uwight
        const age = data.age
    DataPage.inputdt(hight,wight,age)
    DataPage.click()
    })
})
Then ('Users get underweight notifications',()=>{
    cy.get('#hasilKualitas').should('contain.text','Berat Badan Kurang')
})

//Helaty
When ('the user input healthy data and User clicks the calculate button',()=>{
    cy.fixture("data").then((data) => {
        const hight = data.hight
        const wight = data.nwight
        const age = data.age
    DataPage.inputdt(hight,wight,age)
    DataPage.click()
    })
})
Then ('Users get healthy notifications',()=>{
    cy.get('#hasilKualitas').should('contain.text','Normal')
})

//Overweight
When ('the user input overweight data and User clicks the calculate button',()=>{
    cy.fixture("data").then((data) => {
        const hight = data.hight
        const wight = data.hwight
        const age = data.age
    DataPage.inputdt(hight,wight,age)
    DataPage.click()
    })
})
Then ('Users get overweight notifications',()=>{
    cy.get('#hasilKualitas').should('contain.text','Berat Badan Lebih')
})

//Overweight
When ('the user input obeses data and User clicks the calculate button',()=>{
    cy.fixture("data").then((data) => {
        const hight = data.hight
        const wight = data.owight
        const age = data.age
    DataPage.inputdt(hight,wight,age)
    DataPage.click()
    })
})
Then ('Users get obeses notifications',()=>{
    cy.get('#hasilKualitas').should('contain.text','Obesitas')
})
