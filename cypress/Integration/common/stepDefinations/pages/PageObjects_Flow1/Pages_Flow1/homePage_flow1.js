export class homePage{

    static homePage_name=':nth-child(1) > .form-control'
    static homePage_email= ':nth-child(2) > .form-control'
    static homePage_password= '#exampleInputPassword1'
    static homePage_IcecreamCheck= '#exampleCheck1'
    static homePage_Gender='#exampleFormControlSelect1'
    static homePage_RadioStudent='#inlineRadio1'
    static homePage_RadioEmployed='#inlineRadio2'
    static homePage_DateOfBirth=':nth-child(8) > .form-control'
    static homePage_Submit= '.btn'
    static homePage_SubmitAlert= '.alert'

    static Enter_Name(value){
        cy.get(this.homePage_name).type(value)
    }
    static Enter_Email(value){
        cy.get(this.homePage_email).type(value)
    }
    static Enter_Password(value){
        cy.get(this.homePage_password).type(value)
    }
    static Check_IceCream(){
        cy.get(this.homePage_IcecreamCheck).check()
    }
    static Select_Gender(value){
        cy.get(this.homePage_Gender).select(value)
    }
    static Check_radio_Student(){
        cy.get(this.homePage_RadioStudent).check()
    }
    static Check_radio_Employed(){
        cy.get(this.homePage_RadioEmployed).check()
    }
    static Enter_DateOfBirth(value){
        cy.get(this.homePage_DateOfBirth).type(value)
    }
    static Click_On_Submit(){
        cy.get(this.homePage_Submit).click()
    }
    static Verify_Alert(){
        cy.get(this.homePage_SubmitAlert)
    }

}