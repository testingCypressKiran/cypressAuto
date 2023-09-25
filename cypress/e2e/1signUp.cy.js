// Import the Page Objects and test data
import homepage from "../PageObject/HomePage.js";
import signup from "../PageObject/SignupLoginPage.js";

const data = require('../fixtures/data.json');

// Create instances of Page Objects

const home = new homepage(); // home is the object reference variable
const signP = new signup();

describe('signup with POM', () => {

const home=new homepage(); 
const signP=new signup();

  beforeEach(() => {
    cy.visit('/')
    home.verifyLogo() // Verify that you are on the homepage.
    home.clickSignupBtn();
    signP.verifySignupPage();
  })

  it("signup with correct mail id", () => {
    // Enter user name from test data
    signP.enterName(data.userName);
    // Input a random email from test data
    signP.inputRandomEmail(data.randomMailId);
    // Click the signup button on the signup page
    signP.clickSignupbtn();
    // Verify the account information section is displayed
    signP.txt_verifyAccountInformation();
    // Click and verify the radio button
    signP.clickRadioBtn();
    // Enter a signup password from test data
    signP.enterSignupPassword(data.password);
    // Verify the dropdowns for day, month, and year
    signP.verifyDropdownDay();
    signP.verifyDropdownMonth();
    signP.verifyDropdownYear();
    // Verify the checkboxes
    signP.verifyCheckboxes();
    // Enter first name from test data
    signP.enterFname(data.userName);
    // Input last name from test data
    signP.inputLname(data.lname);
    // Input address from test data
    signP.inputAddress(data.address);
    // Input state from test data
    signP.inputState(data.state);
    // Input city from test data
    signP.inputCity(data.city);
    // Input zip code from test data
    signP.inputZipcode(data.zip);
    // Input phone number from test data
    signP.inputNmuber(data.Mnumber);
    // Click the create button
    signP.clickCreateBtn();
    // Verify that the account creation is successful
    signP.verifyAccountCreation();
    // Click the continue button
    signP.clickContBtn();
    // Verify that the login page is displayed
    home.verifyLogin();
  })

  it("signup with incorrect mail id", () => {
    signP.enterName(data.userName);
    // Input an invalid email from test data
    signP.inputInvalidEmail(data.wrongMailId);
    // Click the signup button on the signup page
    signP.clickSignupbtn();
    // Verify that an error message related to the email is displayed
    signP.verifyMail();
  })

  it("Register User with existing email", () => {
    // Enter user name from test data
    signP.enterName(data.userName);
    // Input an existing email from test data
    signP.inputExistingMailId(data.emailId);
    // Click the signup button on the signup page
    signP.clickSignupbtn();
    // Verify that an error message related to the existing email is displayed
    signP.verifyExistingMailId();
  })

  it("signup without entering password", () => {
    // Enter user name from test data
    signP.enterName(data.userName);
    // Input a random email from test data
    signP.inputRandomEmail(data.randomMailId2);
    // Click the signup button on the signup page
    signP.clickSignupbtn();
    // Verify that the account information section is displayed
    signP.txt_verifyAccountInformation();
    // Click and verify the radio button
    signP.clickRadioBtn();
    // Verify the dropdowns for day, month, and year
    signP.verifyDropdownDay();
    signP.verifyDropdownMonth();
    signP.verifyDropdownYear();
    // Verify the checkboxes
    signP.verifyCheckboxes();
    // Enter first name from test data
    signP.enterFname(data.userName);
    // Input last name from test data
    signP.inputLname(data.lname);
    // Input address from test data
    signP.inputAddress(data.address);
    // Input state from test data
    signP.inputState(data.state);
    // Input city from test data
    signP.inputCity(data.city);
    // Input zip code from test data
    signP.inputZipcode(data.zip);
    // Input phone number from test data
    signP.inputNmuber(data.Mnumber);
    // Click the create button without entering a password
    signP.clickCreateBtn();
    // Verify that an error message related to not entering a password is displayed
    signP.verifyNotEnteringPassword();
  })
})
