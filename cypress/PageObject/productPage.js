const data = require('../fixtures/data.json'); // Importing data from a JSON file

class productAdding {
    // Element selectors
    btn_search = "#search_product";
    btn_submit = "#submit_search";
    allProducts = '[class="features_items"]';
    Product = '[class="btn btn-default add-to-cart"]';
    productList = '[class="features_items"]';
    btn_continue = '.modal-footer > .btn';
    viewCart = 'u';
    continueButton = "[data-qa='continue-button']";
    viewProductLink = ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a";
    reviewLink = "a[href='#reviews']";
    logo = "#sale_image";
    verifyAddingProduct = ".modal-body > :nth-child(1)";
    addToCartBtn = '[class="btn btn-default cart"]';
    viewProduct = '[class="fa fa-plus-square"]';
    productImg = '[src="/get_product_picture/28"]';

    // Method to verify the product page logo
    verifyProductPage() {
        cy.get(this.logo).should('be.visible').and('exist');
    }

    // Method to click the "View Product" link
    clickViewProduct() {
        cy.get(this.viewProductLink).click();
    }

    // Method to input a search query
    inputSearch(search) {
        cy.get(this.btn_search).should('be.visible').type(search);
    }

    // Method to click the "Submit Search" button
    clickSubmitSearch() {
        cy.get(this.btn_submit).click();
    }

    // Method to verify the searched page title
    verifySearchedPage() {
        cy.get(".title.text-center").should('have.text', data.searchedPage);
    }

    // Method to add a product to the cart and continue
    clickAddProduct1() {
        cy.get(this.Product).eq(0).trigger('mouseover').click(); // Click the product button
        cy.get(this.verifyAddingProduct).invoke("text")
            .then((text2) => {
                expect(text2).to.eq(data.addingProductText); // Verify the adding product text
            });
        cy.get(this.btn_continue).click(); // Click the continue button
    }

    // Method to add a product to the cart and view cart
    clickAddProduct2() {
        cy.get(this.viewProduct).eq(1).trigger('mouseover').click(); // View product
        cy.get(this.productImg).should('be.visible'); // Verify product image
        cy.get(this.addToCartBtn).click(); // Add to cart
        cy.get(this.verifyAddingProduct).should('have.text', data.addingProductText); // Verify adding product text
        cy.get(this.viewCart).click(); // View cart
    }

    // Method to click the last continue button
    clickLastBtn() {
        cy.get(this.continueButton).click();
    }
}

export default productAdding;
