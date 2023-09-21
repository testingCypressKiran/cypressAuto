const data = require('../fixtures/data.json'); // Importing data from a JSON file

class signup {
    // Element selectors
    veifySignUpLoginPage = "div[class='signup-form']>h2";
    verifyAccountInformationPage = 'div[class="login-form"]>[style="color: #FE980F;"]>b';
    inputName = "input[placeholder='Name']";
    inputEmail = "input[data-qa='signup-email']";
    signupButton = "button[data-qa='signup-button']";
    genderRadioButton = "#id_gender2";
    passwordInput = "input#password";
    dayDropdown = "select#days";
    monthDropdown = "select#months";
    yearDropdown = "select#years";
    newsletterCheckbox = "#newsletter";
    optinCheckbox = "input#optin";
    firstNameInput = "#first_name";
    lastNameInput = "#last_name";
    addressInput = "#address1";
    stateInput = "#state";
    cityInput = "#city";
    zipcodeInput = "#zipcode";
    mobileNumberInput = "#mobile_number";
    createAccountButton = "button[data-qa='create-account']";
    continueButton = "[data-qa='continue-button']";
    verifySignupButton = "[class='login-form']>h2>b";
    emailInput = "input[data-qa='login-email']";
    signupPassword = '#password';
    loginButton = "button[data-qa='login-button']";
    SignupPageVerify = "div[class='signup-form']>h2";
    LoginPassword = "input[placeholder='Password']";
    accountCreationVerify = 'h2[data-qa="account-created"]>b';
    verifyExistingMail = 'p[style="color: red;"]';

    // Method to input an existing email
    inputExistingMailId(existingMail) {
        cy.get(this.inputEmail).type(existingMail);
    }

    // Method to verify the existence of an error message for existing email
    verifyExistingMailId() {
        cy.get(this.verifyExistingMail).invoke("text")
            .then((t) => {
                expect(t).to.eq(data.existingMailTEXT);
            });
    }

    // Method to verify the Signup page title
    verifySignupPage() {
        cy.get(this.veifySignUpLoginPage).invoke("text")
            .then((text2) => {
                expect(text2).to.eq(data.signupPageText);
            });
    }

    // Method to input a name
    enterName(user) {
        cy.get(this.inputName).should('be.visible').type(user);
    }

    // Method to generate and input a random email
    inputRandomEmail() {
        let random = Math.random().toString(36).substring(2);
        var mail = "t1" + random + "@testing.com";
        console.log(mail);
        cy.get(this.inputEmail).type(mail);
    }

    // Method to click the Signup button
    clickSignupbtn() {
        cy.get(this.signupButton).should('be.visible').click();
    }

    // Method to verify the Account Information page title
    txt_verifyAccountInformation() {
        cy.get(this.verifyAccountInformationPage).should('have.text', data.accountInformationText);
    }

    // Method to input an invalid email
    inputInvalidEmail(wrongMail) {
        cy.get(this.inputEmail).type(wrongMail);
    }

    // Method to verify email validation error message
    verifyMail() {
        cy.get(this.inputEmail).then(($input) => {
            expect($input[0].validationMessage).to.include(data.invalidEmailText);
        });
    }

    // Method to click the gender radio button
    clickRadioBtn() {
        cy.get(this.genderRadioButton).should('be.visible');
        cy.get(this.genderRadioButton).check().should('be.checked');
    }

    // Method to verify not entering a password
    verifyNotEnteringPassword() {
        cy.get(this.passwordInput).then(($input) => {
            expect($input[0].validationMessage).to.include(data.passwrdText);
        });
    }

    // Method to verify the dropdown for selecting the day
    verifyDropdownDay() {
        cy.get(this.dayDropdown)
            .select('4')
            .should('have.value', '4');
    }

    // Method to verify the dropdown for selecting the month
    verifyDropdownMonth() {
        cy.get(this.monthDropdown)
            .select('June');
    }

    // Method to verify the dropdown for selecting the year
    verifyDropdownYear() {
        cy.get(this.yearDropdown)
            .select('2000')
            .should('have.value', '2000');
    }

    // Method to verify checkboxes for newsletter and opt-in
    verifyCheckboxes() {
        cy.get(this.newsletterCheckbox).should('be.visible');
        cy.get(this.newsletterCheckbox).check().should('be.checked');
        cy.get(this.optinCheckbox).should('be.visible');
        cy.get(this.optinCheckbox).check().should('be.checked');
    }

    // Method to input the first name
    enterFname(fname) {
        cy.get(this.firstNameInput).should('be.visible').type(fname);
    }

    // Method to input the last name
    inputLname(lname) {
        cy.get(this.lastNameInput).should('be.visible').type(lname);
    }

    // Method to input the address
    inputAddress(address) {
        cy.get(this.addressInput).should('be.visible').type(address);
    }

    // Method to input the state
    inputState(state) {
        cy.get(this.stateInput).should('be.visible').type(state);
    }

    // Method to input the city
    inputCity(city) {
        cy.get(this.cityInput).should('be.visible').type(city);
    }

    // Method to input the zipcode
    inputZipcode(zipcode) {
        cy.get(this.zipcodeInput).should('be.visible').type(zipcode);
    }

    // Method to input the mobile number
    inputNmuber(mobilenumber) {
        cy.get(this.mobileNumberInput).should('be.visible').type(mobilenumber);
    }

    // Method to click the Create Account button
    clickCreateBtn() {
        cy.get(this.createAccountButton).click();
    }

    // Method to verify account creation
    verifyAccountCreation() {
        cy.get(this.accountCreationVerify).invoke("text")
            .then((text2) => {
                expect(text2).to.eq(data.accountCreationText);
            });
    }

    // Method to click the Continue button
    clickContBtn() {
        cy.get(this.continueButton).click();
    }

    // Method to click the Signup Login button
    clickSignupLogin() {
        cy.get(this.signupLoginButton).click();
    }

    // Method to input a valid email
    inputValidEmail(email) {
        cy.get(this.emailInput).type(email);
    }

    // Method to enter the login password
    enterLoginPasswrd(password1) {
        cy.get(this.LoginPassword).type(password1);
    }

    // Method to click the Login button
    clickLoginBtn() {
        cy.get(this.loginButton).click();
    }

    // Method to enter the signup password
    enterSignupPassword(psswrd) {
        cy.get(this.signupPassword).type(psswrd);
    }
}

export default signup;
