const data = require('../fixtures/data.json'); // Importing data from a JSON file

class review {
    // Element selectors
    nameInput = "#name";
    emailInput = "#email";
    reviewInput = "#review";
    submitButton = "#button-review";
    erroralert = "div[class='alert-success alert']>span";
    successfulReview = '[class="form-row hide"]>div>div>span';
    reviewPage = "a[href='#reviews']";

    // Method to verify the Review page title
    verifyReviewPage() {
        cy.get(this.reviewPage).invoke("text")
            .then((text1) => {
                expect(text1).to.eq(data.reviewPageVerifyText); // Verify the Review page title text
            });
    }

    // Method to input a user's name
    inputName(userName) {
        cy.get(this.nameInput).should('be.visible').type(userName);
    }

    // Method to input an email
    inputEmail(email) {
        cy.get(this.emailInput).should('be.visible').type(email);
    }

    // Method to input a review
    inputAddReview(review) {
        cy.get(this.reviewInput).should('be.visible').type(review);
    }

    // Method to click the submit button
    clickSubmit() {
        cy.get(this.submitButton).click();
    }

    // Method to verify a successful review message
    verifySuccessfulMessage() {
        cy.get(this.successfulReview).should('have.text', data.successfulReviewText); // Verify the success message
    }
}

export default review;
