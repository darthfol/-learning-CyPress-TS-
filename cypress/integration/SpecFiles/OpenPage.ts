import LoginPage from '../POM/LoginPage';

describe("Testing login page", () => {
    


  
    let loginPage = new LoginPage();
    it("Login to app - P", () => {
        cy.login('admin@yourstore.com', 'admin');
        cy.title().should('eq', 'Dashboard / nopCommerce administration');
    });
/*
    it("Login to app,wrong Email - N", () => {
        loginPage.openPage();
        loginPage.fillEmail('ThisIsWrongAddressMaill');
        loginPage.fillPassword('admin');
        loginPage.logIn();
        cy.title().should('eq', 'Your store. Login')
    })

    it("Login to app, wrong password - N", () => {
        loginPage.openPage();
        loginPage.fillEmail('admin@yourstore.com');
        loginPage.fillPassword('ThisIsWrongPassword');
        loginPage.logIn();
        cy.title().should('eq', 'Your store. Login');
    })
    */
});