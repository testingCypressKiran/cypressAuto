import review from "../PageObject/reviewPage.js";
import homepage from "../PageObject/HomePage.js";
import productAdding from "../PageObject/productPage.js";
let data = require('../fixtures/data.json');

let home=new homepage();
let prod=new productAdding();
let rev=new review();

describe('Adding review with POM',()=>{

  it("Add review",()=>{

     cy.visit('/')
     home.verifyLogo();
     home.clickProductbutton();
     prod.clickViewProduct();
     rev.verifyReviewPage();
     rev.inputName(data.userName);
     rev.inputEmail(data.emailId);
     rev.inputAddReview(data.addReview);
     rev.clickSubmit();
     rev.verifySuccessfulMessage()
  })
})