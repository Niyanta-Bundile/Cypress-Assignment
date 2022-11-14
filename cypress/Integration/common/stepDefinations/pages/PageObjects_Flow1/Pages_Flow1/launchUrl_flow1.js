export class url {

    static Url= 'https://rahulshettyacademy.com/angularpractice'

    static Launch_Url(){
        cy.visit (this.Url)
    }
}