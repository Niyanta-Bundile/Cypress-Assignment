export class header{

    static header_logo = '.navbar-brand'
    static header_home= ':nth-child(1) > .nav-link'
    static header_shop= ':nth-child(2) > .nav-link'
    static header_shopPage_Checkout= '#navbarResponsive > .navbar-nav > .nav-item > .nav-link'

    static Click_On_Home(){
        cy.get(this.header_home).click()
    }

    static Click_On_Shop(){
        cy.get(this.header_shop).click()
    }

    static Click_On_Checkout(){
        cy.get(this.header_shopPage_Checkout).click()
    }
}