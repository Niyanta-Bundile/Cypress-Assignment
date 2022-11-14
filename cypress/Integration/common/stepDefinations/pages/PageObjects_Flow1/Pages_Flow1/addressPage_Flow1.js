export class addressPage{

    static addressPage_country = '#country'
    static addressPage_purchase = 'form.ng-untouched > .btn'
    static addressPage_alert = '.alert'
    static addressPage_checkbox= '#checkbox2'

    static Enter_Country(value){
        cy.get(this.addressPage_country).type(value)
    }
    static select_Country(value){
        cy.contains(value).click()
    }
    static checkCheckbox(){
        cy.get(this.addressPage_checkbox).check({force:true})
    }
    static Click_On_purchase(){
        cy.get(this.addressPage_purchase).click()
    }
    static Verify_Alert(){
        cy.get(this.addressPage_alert)
    }
}