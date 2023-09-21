const data = require('../fixtures/data.json'); // Importing data from a JSON file

import 'cypress-file-upload'

class contactUs {

    // Element selectors
    verify_contactUs = "div[class='contact-form']>h2[class='title text-center']";
    typeName = "input[placeholder='Name']";
    typeEmail = "input[placeholder='Email']";
    typeSubject = "input[placeholder='Subject']";
    typeMessage = "#message";
    btn_Submit = "input[value='Submit']";
    successalert = ".status.alert.alert-success";
    butonHome = "a[class='btn btn-success']>span";
    fileUpload = "input[name='upload_file']";

    // Method to verify the Contact Us page title
    verifyContactUsPage() {
        cy.get(this.verify_contactUs).invoke("text")
            .then((text2) => {
                expect(text2).to.eq(data.contactUsPageVerifyText); // Verify the page title text
            });
    }

    // Method to enter a name in the input field
    enterName(name) {
        cy.get(this.typeName).should('be.visible').type(name);
    }

    // Method to enter an email in the input field
    enterEmail(email) {
        cy.get(this.typeEmail).should('be visible').type(email);
    }

    // Method to enter a subject in the input field
    enterSubject(subject) {
        cy.get(this.typeSubject).should('be visible').type(subject);
    }

    // Method to enter a message in the input field
    enterMessage(message) {
        cy.get(this.typeMessage).should('be visible').type(message);
    }

    // Method to upload a file
    uploadFile() {
        cy.get(this.fileUpload).attachFile(data.fileUpload); // Using data from the JSON file
    }

    // Method to click the Submit button
    submitButton() {
        cy.get(this.btn_Submit).should('be.visible').click();
    }

    // Method to verify an alert message
    verifyAlert() {
        cy.on('window:alert', (t) => {
            expect(t).to.contains(data.windowAlertText); // Verify the alert message
        });
    }

    // Method to verify a successful submission message
    verifySuccessfulSubmittion() {
        cy.get(this.successalert).invoke("text")
            .then((t) => {
                expect(t).to.eq(data.successfulSubmText); // Verify the success message
            });
    }

    // Method to click the home button
    clickhomeButton() {
        cy.get(this.butonHome).should('be.visible').click();
    }
}

export default contactUs;
