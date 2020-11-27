export class LoginPage{

    openPage() {
        cy.visit('https://admin-demo.nopcommerce.com/login');
    }

    fillLogin(email:string) {
        cy.get('#Email').clear().type(email);
    }

    fillPassword(passwd:string) {
        cy.get('#Password').clear().type(passwd);
    }

    logIn() {
        cy.get('input[type=submit').click();
    }

    fullLogIn(login:string,passwd:string){
        this.openPage();
        this.fillLogin(login);
        this.fillPassword(passwd);
        this.logIn();
    }

}
