const data = require('../fixtures/data.json'); // Importing data from a JSON file

class homepage {
    // Element selectors
    logo = '[src="/static/images/home/logo.png"]';
    btn_contactUs = "a[href='/contact_us']";
    btn_signup = "a[href='/login']";
    btn_verifyLogin = 'div[class="shop-menu pull-right"]>ul>li:nth-child(10)>a';
    btn_product = "a[href='/products']";

    // Method to verify the presence of the logo
    verifyLogo() {
        cy.get(this.logo).should('be.visible');
    }

    // Method to click the Signup button
    clickSignupBtn() {
        cy.get(this.btn_signup).should('be.visible').click();
    }

    // Method to click the Product button
    clickProductbutton() {
        cy.get(this.btn_product).should('be.visible').click();
    }

    // Method to click the Contact Us button
    clickContactUs() {
        cy.get(this.btn_contactUs).should('be.visible').click();
    }

    // Method to verify the presence of a login button with specific text
    verifyLogin() {
        cy.get(this.btn_verifyLogin).should('contain', data.loginVerifyText);
    }
}

export default homepage;
