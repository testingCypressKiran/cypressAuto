// Import test data and configuration from a JSON file
const data = require('../fixtures/data.json');

// Import the 'cypress-file-upload' plugin for file upload testing
import 'cypress-file-upload';

// Define a class for interacting with a web page
class contactUs {

    // CSS selectors for various elements on the page
    verify_contactUs = "div[class='contact-form']>h2[class='title text-center']";
    typeName = "input[placeholder='Name']";
    typeEmail = "input[placeholder='Email']";
    typeSubject = "input[placeholder='Subject']";
    typeMessage = "#message";
    btn_Submit = "input[value='Submit']";
    successalert = ".status.alert.alert-success";
    butonHome = "a[class='btn btn-success']>span";
    fileUpload = "input[name='upload_file']";

    // Method to verify the presence of the "Contact Us" page
    verifyContactUsPage() {
        cy.get(this.verify_contactUs).invoke("text")
            .then((text2) => {
                expect(text2).to.eq(data.contactUsPageVerifyText);
            })
    }

    // Method to enter a name into the "Name" input field
    enterName(name) {
        cy.get(this.typeName).should('be.visible').type(name);
    }

    // Method to enter an email into the "Email" input field
    enterEmail(email) {
        cy.get(this.typeEmail).should('be.visible').type(email);
    }

    // Method to enter a subject into the "Subject" input field
    enterSubject(subject) {
        cy.get(this.typeSubject).should('be visible').type(subject);
    }

    // Method to enter a message into the message input field
    enterMessage(message) {
        cy.get(this.typeMessage).should('be visible').type(message);
    }

    // Method to upload a file using the 'cypress-file-upload' plugin
    uploadFile() {
        cy.get(this.fileUpload).attachFile(data.fileUpload);
    }

    // Method to click the "Submit" button
    submitButton() {
        cy.get(this.btn_Submit).should('be.visible').click();
    }

    // Method to verify a window alert
    verifyAlert() {
        cy.on('window:alert', (t) => {
            expect(t).to.contains(data.windowAlertText);
        })
    }

    // Method to verify a successful submission alert
    verifySuccessfulSubmission() {
        cy.get(this.successalert).invoke("text")
            .then((t) => {
                expect(t).to.eq(data.successfulSubmText);
            })
    }

    // Method to click a "Home" button
    clickHomeButton() {
        cy.get(this.butonHome).should('be.visible').click();
    }
}

// Export the 'contactUs' class as the default export
export default contactUs;
