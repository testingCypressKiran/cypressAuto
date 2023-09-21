const data = require('../fixtures/data.json'); // Importing data from a JSON file

class viewCart {
    // Element selectors
    shoppingCart = ".active";
    proceedButton = ".btn.btn-default.check_out";
    cartTotalSelector = 'tbody tr td[class="cart_total"]';
    cartTotalPriceSelector = ':nth-child(4) > .cart_total_price';
    placeOrderButton = ":nth-child(7) > .btn";
    checkoutVerify = ".active";

    // Method to verify the View Cart page title
    verifyViewCartPage() {
        cy.checkElementText(this.shoppingCart, data.viewCartPageText);
    }

    // Method to click the Proceed button
    clickProceed() {
        cy.get(this.proceedButton).click();
    }

    // Method to verify the Checkout page title
    verifyCheckoutPage() {
        cy.checkElementText(this.checkoutVerify, data.checkoutPageText);
    }

    // Method to click the Place Order button
    clickPlaceOrder() {
        cy.get(this.placeOrderButton).click();
    }

    // Method to validate the cart total
    validateCart() {
        let sum = 0;
        cy.get(this.cartTotalSelector)
            .each(($el) => {
                const productValue = parseFloat($el.text().replace(/[^0-9-]+/g, ""));
                sum += productValue;
                cy.log(sum + "   " + productValue);
            })
            .then(() => {
                cy.log(sum); // This logs the total sum after processing all elements
            });

        cy.get(this.cartTotalPriceSelector).then((total) => {
            const finalprice = parseFloat(total.text().replace(/[^0-9-]+/g, ""));
            expect(finalprice).to.equal(sum);
        });
    }
}

export default viewCart;
