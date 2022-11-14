///reference types="cypress"/>
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import {header} from "../pages/PageObjects_Flow1/Components_Flow1/header_flow1"
import {url} from "../pages/PageObjects_Flow1/Pages_Flow1/launchUrl_flow1"
import {homePage} from "../pages/PageObjects_Flow1/Pages_Flow1/homePage_flow1"
import {shopPage} from "../pages/PageObjects_Flow1/Pages_Flow1/shopPage_flow1"
import {checkoutPage} from "../pages/PageObjects_Flow1/Pages_Flow1/CheckoutPage_flow1"
import {addressPage} from "../pages/PageObjects_Flow1/Pages_Flow1/addressPage_Flow1"
import { expect } from "chai";


Given("I successfully launch the website", () => {
	cy.visit('/')
});

When("I enter name as {string}", (name) => {
	homePage.Enter_Name(name)
});
And("I enter email as {string}", (email) => {
	homePage.Enter_Email(email)
});
And("I enter password as {string}", (password) => {
	homePage.Enter_Password(password)
});
And("I check on checkbox", () => {
	homePage.Check_IceCream()
});
And("I select gender as {string}", (gender) => {
	homePage.Select_Gender(gender)
});
And("I check on employment status", () => {
	homePage.Check_radio_Employed()
});
And("I enter  Date of Birth as {string}", (DateOfBirth) => {
	homePage.Enter_DateOfBirth(DateOfBirth)
});
And("I click on Submit Button", () => {
	homePage.Click_On_Submit()
});
Then("I should able to see alert message", () => {
	cy.on(homePage.homePage_SubmitAlert,(text)=>{
        expect(text).to.be.equal('Success! The Form has been submitted successfully!.')
    })
});

/////////////////////////////////////////////////

When("I click on shop", () => {
	header.Click_On_Shop()
});

Then("I should visit the shop page", () => {
	cy.on(shopPage.shopPage_shopPageName,(text)=>{
        expect(text).to.be.equal('Shop Name')
    })
});

Then("I should able to add product as {string} with quantity {string} to cart", (product,Qty) => {
	shopPage.Product1_Name('contains',product)
    for(let i=0;i<Qty;i++){
        shopPage.Click_On_Product1_AddToCart()
    }

});

When("I Go to Cart and verify quantity {string}", (Qty) => {
	header.Click_On_Checkout()
    cy.on(checkoutPage.checkoutPage_ProductQuantity, (text)=>{
        expect(text).to.be.equal(Qty)
    })
});

And("click on checkout", () => {
	checkoutPage.Click_On_Checkout()
});

And("Select country as {string}", (Country) => {
	addressPage.Enter_Country(Country)
    cy.wait(5000)
    addressPage.select_Country(Country)
});

And("agree terms and contitions & click on Purchase", () => {
	addressPage.checkCheckbox()
	addressPage.Click_On_purchase()
});

Then("I should see alert message", () => {
	cy.on('window:alert', (text)=>{
		expect(text).to.be.equal('Success! Thank you! Your order will be delivered in next few weeks :-).')
	})
});

