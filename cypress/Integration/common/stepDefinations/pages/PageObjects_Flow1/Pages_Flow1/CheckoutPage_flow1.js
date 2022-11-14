export class checkoutPage{

    static checkoutPage_ProductImage= '.media-object'
    static checkoutPage_ProductName= 'h4.media-heading > a'
    static checkoutPage_ProductQuantity= '#exampleInputEmail1'
    static checkoutPage_ProductPrice=':nth-child(3) > strong'
    static checkoutPage_Remove=':nth-child(1) > :nth-child(5) > .btn'
    static checkoutPage_checkout= ':nth-child(3) > :nth-child(5) > .btn'

    static product_Image(){
        cy.get(this.checkoutPage_ProductImage)
    }
    static product_Name(){
        cy.get(this.checkoutPage_ProductName)
    }
    static product_Quantity(){
        cy.get(this.checkoutPage_ProductQuantity)
    }
    static product_Price(){
        cy.get(this.checkoutPage_ProductPrice)
    }
    static Click_On_Remove(){
        cy.get(this.checkoutPage_Remove).click()
    }
    static Click_On_Checkout(){
        cy.get(this.checkoutPage_checkout).click()
    }
}