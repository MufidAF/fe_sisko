const URL = 'https://www.rsmurniteguh.com/id/tools/kalkulator_bmi'
const HEIGHT = '#bmiHeight'
const WEIGHT = '#bmiWeight'
const AGE = '#bmiAge'

class DataPage{

    static visit(){
        cy.visit(URL)
    }

    static inputdt(hight,wight,age){
        cy.get('#wanita').check()
        cy.get(HEIGHT).type(hight)
        cy.get(WEIGHT).type(wight)
        cy.get(AGE).type(age)
        

    }
    static click(){
        cy.contains('Hitung BMI').click()
    }

}
export default DataPage