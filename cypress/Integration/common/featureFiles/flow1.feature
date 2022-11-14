Feature: Purchase product from ProtoCommerce website 

    As a user
    I want to fill the form and add product to shopping cart
    So that I can purchase product

Background: Launch the website
    Given I successfully launch the website

Scenario Outline: Fill the data in the fields and submit successully
    When I enter name as "<Name>"
    And I enter email as "<Email>"
    And I enter password as "<Password>"
    And I check on checkbox
    And I select gender as "<Gender>"
    And I check on employment status
    And I enter  Date of Birth as "<DateOfBirth>"
    And I click on Submit Button
    Then I should able to see alert message
    Examples:
        | Name | Email | Password | Gender | DateOfBirth |
        | Admin  | admin@mail.com | Admin123 | Female | 1993-09-21 | 

Scenario Outline: Purchase product IphoneX
    When I click on shop 
    Then I should visit the shop page
    And I should able to add product as "<Product>" with quantity "<Qty>" to cart

    When I Go to Cart and verify quantity "<Qty>"
    And click on checkout
    And Select country as "<Country>"
    And agree terms and contitions & click on Purchase
    Then I should see alert message
    
    Examples:
        | Product | Qty | Country |
        | iphone X | 1 | India |
        | iphone X | 3 | India |




