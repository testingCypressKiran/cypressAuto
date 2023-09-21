const data = require('../fixtures/data.json'); // Importing data from a JSON file

class payment {
    // Element selectors
    verifyPayment = ".heading";
    nameOnCardInput = "[data-qa='name-on-card']";
    cardNumberInput = "[data-qa='card-number']";
    cvvInput = "[data-qa='cvc']";
    expiryMonthInput = "[data-qa='expiry-month']";
    expiryYearInput = "[data-qa='expiry-year']";
    btn_pay = "[data-qa='pay-button']";
    verifyOrderplaced = 'div[class="col-sm-9 col-sm-offset-1"]>p';

    // Method to verify the Payment page title
    verifyPaymentPage() {
        cy.get(this.verifyPayment).invoke("text")
            .then((text21) => {
                expect(text21).to.eq(data.PaymentText); // Verify the Payment page title text
            });
    }

    // Method to input the name on the card
    inputNameOnCard(Cardname) {
        cy.get(this.nameOnCardInput).should('be.visible').type(Cardname);
    }

    // Method to input the card number
    inputCardNumber(Cnumber) {
        cy.get(this.cardNumberInput).should('be.visible').type(Cnumber);
    }

    // Method to input the CVV
    inputCvv(cvv) {
        cy.get(this.cvvInput).should('be.visible').type(cvv);
    }

    // Method to input the expiry month
    inputMonth(month) {
        cy.get(this.expiryMonthInput).should('be.visible').type(month);
    }

    // Method to input the expiry year
    inputYear(year) {
        cy.get(this.expiryYearInput).should('be.visible').type(year);
    }

    // Method to click the Pay button and verify order placement
    clickPayBtn() {
        cy.get(this.btn_pay).click();
        cy.get(this.verifyOrderplaced).invoke("text")
            .then((text) => {
                expect(text).to.eq(data.verifOrderPlacedText); // Verify the order placement message
            });
    }
}

export default payment;
