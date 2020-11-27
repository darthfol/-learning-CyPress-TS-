import { LoginPage } from "../POM/LoginPage";

describe('Testing how log into page',()=>{
    
    //#region Initialization of needed

    let loginPage  = new LoginPage();
    //#endregion


    it('Log into page -P ',()=>{
        loginPage.openPage();
        loginPage.fillLogin('admin@yourstore.com');
        loginPage.fillPassword('admin');
        loginPage.logIn();
        cy.url().should('eq','https://admin-demo.nopcommerce.com/admin/');
    })

    it('Log into page -N /Wrong Password',()=>{
        loginPage.openPage();
        loginPage.fillLogin('admin@yourstore.com');
        loginPage.fillPassword('ThisIsWrongPassword');
        loginPage.logIn();
        cy.url().should('eq','https://admin-demo.nopcommerce.com/login');
        cy.get('div.message-error').should('be.visible');
    })

    it('Log into page -N /Wrong Login',()=>{
        loginPage.openPage();
        loginPage.fillLogin('ThisIsWrongLogin');
        loginPage.fillPassword('admin');
        loginPage.logIn();
        cy.url().should('eq','https://admin-demo.nopcommerce.com/login');
        cy.get('div.message-error').should('be.visible');
        cy.get('#Email-error').should('contains','Wrong email');
    })
})

