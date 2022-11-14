export class shopPage{
    static shopPage_shopPageName='div.col-lg-3 > .my-4'

    static shopPage_Product1_Image= ':nth-child(1) > .card > :nth-child(1) > .card-img-top'
    static shopPage_Product1_Name=':nth-child(1) > .card > .card-body > .card-title > a'
    static shopPage_Product1_Price= ':nth-child(1) > .card > .card-body > h5'
    static shopPage_Product1_AddToCart= ':nth-child(1) > .card > .card-footer > .btn'
    
    static shopPage_Product2_Image=':nth-child(2) > .card > :nth-child(1) > .card-img-top'
    static shopPage_Product2_Name=':nth-child(2) > .card > .card-body > .card-title > a'
    static shopPage_Product2_Price=':nth-child(2) > .card > .card-body > h5'
    static shopPage_Product2_AddToCart=':nth-child(2) > .card > .card-footer > .btn'
    
    static shopPage_Product3_Image=':nth-child(3) > .card > :nth-child(1) > .card-img-top'
    static shopPage_Product3_Name=':nth-child(3) > .card > .card-body > .card-title > a'
    static shopPage_Product3_Price=':nth-child(3) > .card > .card-body > h5'
    static shopPage_Product3_AddToCart=':nth-child(3) > .card > .card-footer > .btn'
    
    static shopPage_Product4_Image=':nth-child(4) > .card > :nth-child(1) > .card-img-top'
    static shopPage_Product4_Name=':nth-child(4) > .card > .card-body > .card-title > a'
    static shopPage_Product4_Price=':nth-child(4) > .card > .card-body > h5'
    static shopPage_Product4_AddToCart=':nth-child(4) > .card > .card-footer > .btn'

    static ShopName(){
        cy.get(this.shopPage_shopPageName)
    }
    static Product1_Image(){
        cy.get(this.shopPage_Product1_Image)
    }
    static Product1_Name(){
        cy.get(this.shopPage_Product1_Name)
    }
    static Product1_Price(){
        cy.get(this.shopPage_Product1_Price)
    }
    static Click_On_Product1_AddToCart(){
        cy.get(this.shopPage_Product1_AddToCart).click()
    }

}
