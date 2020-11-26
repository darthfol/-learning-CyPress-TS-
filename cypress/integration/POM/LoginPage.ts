class LoginPage{
    openPage() {
        cy.visit('https://admin-demo.nopcommerce.com/login');
    }

    fillEmail(email) {
        cy.get('#Email').clear().type(email);
    }

    fillPassword(passwd) {
        cy.get('#Password').clear().type(passwd);
    }

    logIn() {
        cy.get('input[type=submit').click();
    }
}
export default LoginPage;