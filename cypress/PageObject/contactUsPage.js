const data = require('../fixtures/data.json'); // Importing data from a JSON file

import 'cypress-file-upload'

class contactUs{

    verify_contactUs = "div[class='contact-form']>h2[class='title text-center']";
    typeName = "input[placeholder='Name']";
    typeEmail = "input[placeholder='Email']";
    typeSubject = "input[placeholder='Subject']";
    typeMessage = "#message";
    btn_Submit = "input[value='Submit']";
    successalert = ".status.alert.alert-success";
    butonHome = "a[class='btn btn-success']>span";
    fileUpload = "input[name='upload_file']";



    verifyContactUsPage(){ 
    cy.get(this.verify_contactUs).invoke("text")
    .then((text2)=>
    {
        expect(text2).to.eq(data.contactUsPageVerifyText)
    })
    }

    enterName(name){
        cy.get(this.typeName).should('be.visible').type(name);
    }

    enterEmail(email){
        cy.get(this.typeEmail).should('be.visible').type(email);
    }

    enterSubject(subject){
        cy.get(this.typeSubject).should('be.visible').type(subject);

    }

    enterMessage(message){
        cy.get(this.typeMessage).should('be.visible').type(message);

    }

    uploadFile(){
        cy.get(this.fileUpload).attachFile(data.fileUpload);
        
    }
    
    submitButton(){
        cy.get(this.btn_Submit).should('be.visible').click();
    }
    
    verifyAlert(){
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(data.windowAlertText);
        })
    }

    verifySuccessfulSubmittion(){
        cy.get(this.successalert).invoke("text")
        .then((t)=>
        {
            expect(t).to.eq(data.successfulSubmText)
        })
    } 
    
    clickhomeButton(){
    cy.get(this.butonHome).should('be.visible').click();
    }             
}

export default contactUs;