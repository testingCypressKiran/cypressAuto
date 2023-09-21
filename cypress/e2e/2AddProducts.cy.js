import homepage from "../PageObject/HomePage.js";
import signup from "../PageObject/SignupLoginPage.js";
import productAdding from "../PageObject/productPage.js";
import viewCart from "../PageObject/ViewCartPage.js";
import payment from "../PageObject/PaymentPage.js";

const data = require('../fixtures/data.json');

const homeP=new homepage();
const signupP=new signup();
const productP=new productAdding();
const cart=new viewCart();
const paym=new payment();

describe('Adding products with POM',()=>{

  it("addingproduct",()=>{

     cy.visit('/')
     homeP.verifyLogo();
     homeP.clickSignupBtn();
     signupP.verifySignupPage()
     signupP.inputValidEmail(data.emailId);
     signupP.enterLoginPasswrd(data.password);
     signupP.clickLoginBtn();
     homeP.verifyLogin();
     homeP.clickProductbutton();
     productP.verifyProductPage();
     productP.inputSearch(data.search);
     productP.clickSubmitSearch();
     productP.verifySearchedPage();
     productP.clickAddProduct1(); //add product1, verify successful addition of the product and click on continue shopping button.
     productP.clickAddProduct2();//view product and verify prodcut image, add to cart and view cart.
     cart.verifyViewCartPage();
     cart.clickProceed();
     cart.verifyCheckoutPage();
     cart.validateCart();
     cart.clickPlaceOrder();
     paym.verifyPaymentPage();
     paym.inputNameOnCard(data.userName);
     paym.inputCardNumber(data.cardNumber);
     paym.inputCvv(data.cvv);
     paym.inputMonth(data.month);
     paym.inputYear(data.year);
     paym.clickPayBtn(); //Click on the pay and confirm button and verify the same
     productP.clickLastBtn();
     homeP.verifyLogo();
    })
  })