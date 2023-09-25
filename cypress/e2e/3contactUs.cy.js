import contactUs from "../PageObject/contactUsPage.js";
import homepage from "../PageObject/HomePage.js";

const data = require('../fixtures/data.json');

const conct=new contactUs();
const home=new homepage();


describe('Contact Us Form',()=>{

  it("Contact Us",()=>{

     cy.visit('/')

     home.verifyLogo();
     home.clickContactUs();
     conct.verifyContactUsPage();
     conct.enterName(data.userName);
     conct.enterEmail(data.emailId);
     conct.enterSubject(data.addSubject);
     conct.enterMessage(data.addMessage);
     conct.uploadFile();
     conct.submitButton();
     conct.verifyAlert();
     conct.verifySuccessfulSubmittion();
     conct.clickhomeButton();
     home.verifyLogo(); 

  })

})

