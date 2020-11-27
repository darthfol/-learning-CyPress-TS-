
export class AddCustomerPage {

    fillEmail(email:string) {
        cy.get('#Email').clear().type(email);
    }
    fillPassword(password:string) {
        cy.get('#Password').clear().type(password);
    }

    fillFirstName(firstName:string) {
        cy.get('#FirstName').clear().type(firstName);
    }

    fillLastName(lastName:string) {
        cy.get('#LastName').clear().type(lastName);
    }

    choseGender(gender: string) {
        cy.get('input[name=Gender]').check(gender);
    }

    fillDateOfBirth(dateOfBirth:string) {
        cy.get('#DateOfBirth').clear().type(dateOfBirth)
    }

    fillCompanyName(companyName:string) {
        cy.get('#Company').clear().type(companyName);
    }

    checkIsTaxExempt(DoCheck:boolean) {
        const checkBox = cy.get('#IsTaxExempt');
        (DoCheck) ? checkBox.check() : checkBox.uncheck();
    }

    chooseNewsletter(newsletterOption:string[]) {
        newsletterOption.forEach(Option => {
            cy.get(':nth-child(9) > .col-md-9 > .input-group > .k-widget > .k-multiselect-wrap').click();
            cy.get('#SelectedNewsletterSubscriptionStoreIds_listbox').contains(Option).click();
        });

    }

    chooseManagerOfVendor(vendor:string) {
        cy.get('#VendorId').select(vendor);
        cy.get(':nth-child(10) > .col-md-9 > .input-group > .k-widget > .k-multiselect-wrap').click();
        cy.get('#SelectedCustomerRoleIds_listbox').contains('Vendors').click();
    }

    fillAdminComment(comment:string) {
        cy.get('#AdminComment').clear().type(comment);
    }

    fillForm(data) {
        if (data.Email) { this.fillEmail(data.Email) };
        if (data.Password) { this.fillPassword(data.Password) };
        if (data.FirstName) { this.fillFirstName(data.FirstName) };
        if (data.LastName) { this.fillLastName(data.LastName) };
        if (data.Gender) { this.choseGender(data.Gender) };
        if (data.DateOfBirth) { this.fillDateOfBirth(data.DateOfBirth) };
        if (data.Company) { this.fillCompanyName(data.Company) };
        if (data.IsTaxExempt) { this.checkIsTaxExempt(data.IsTaxExempt) };
        if (data.NewsletterOption) { this.chooseNewsletter(data.NewsletterOption) };
        if (data.Vendor) { this.chooseManagerOfVendor(data.Vendor) };
        if (data.Comment) { this.fillAdminComment(data.Comment) };
    }

    saveForm() {
        cy.get('button[name=save]').click();
    }

    saveFormAndContinue() {
        cy.get('button[name=save-continue]').click();
    }

    addNewAdress(){
        cy.get('#customer-address>div>i').click();
        cy.get('#customer-address>div.panel-container>div.panel-body>button').click();
        
    }
}
