// Import the Page Objects and test data
import homepage from "../PageObject/HomePage.js";
import signup from "../PageObject/SignupLoginPage.js";

const data = require('../fixtures/data.json');

// Create instances of Page Objects
const home=new homepage(); //home is the object refence variable
const signP=new signup();

describe('signup with POM',()=>{
  
  beforeEach(() => {
    cy.visit('/') 
    home.verifyLogo() // Verify that you are on the homepage
  })
  
    it("signup with correct mail id",()=>{
      home.clickSignupBtn();
      signP.verifySignupPage();
      signP.enterName(data.userName);
      signP.inputRandomEmail(data.randomMailId); 
      signP.clickSignupbtn();      
      signP.txt_verifyAccountInformation();
      signP.clickRadioBtn();  //select and verify radio button
      signP.enterSignupPassword(data.password);
      signP.verifyDropdownDay();
      signP.verifyDropdownMonth();
      signP.verifyDropdownYear();
      signP.verifyCheckboxes();
      signP.enterFname(data.userName);
      signP.inputLname(data.lname);
      signP.inputAddress(data.address);
      signP.inputState(data.state);
      signP.inputCity(data.city);
      signP.inputZipcode(data.zip);
      signP.inputNmuber(data.Mnumber);
      signP.clickCreateBtn(); 
      signP.verifyAccountCreation();
      signP.clickContBtn();
      home.verifyLogin();
    })

    it("signup with incorrect mail id",()=>{
     home.clickSignupBtn();
     signP.verifySignupPage();
     signP.enterName(data.userName);
     signP.inputInvalidEmail(data.wrongMailId); 
     signP.clickSignupbtn();
     signP.verifyMail(); 
   
    })

    
    it("Register User with existing email",()=>{
      home.clickSignupBtn();
      signP.verifySignupPage();
      signP.enterName(data.userName);
      signP.inputExistingMailId(data.emailId); 
      signP.clickSignupbtn();
      signP.verifyExistingMailId(); 
    })


    it("signup without entering password",()=>{
      home.clickSignupBtn();
      signP.verifySignupPage();
      signP.enterName(data.userName);
      signP.inputRandomEmail(data.randomMailId2); 
      signP.clickSignupbtn();
      signP.txt_verifyAccountInformation();
      signP.clickRadioBtn(); //select and verify radio button
      signP.verifyDropdownDay();
      signP.verifyDropdownMonth();
      signP.verifyDropdownYear();
      signP.verifyCheckboxes();
      signP.enterFname(data.userName);
      signP.inputLname(data.lname);
      signP.inputAddress(data.address);
      signP.inputState(data.state);
      signP.inputCity(data.city);
      signP.inputZipcode(data.zip);
      signP.inputNmuber(data.Mnumber);
      signP.clickCreateBtn();
      signP.verifyNotEnteringPassword();
    })
})
