export class CustomerPage {

    clickAddCustomerBtn() {
        cy.get('.bg-blue').click();
    }

    fillEmail(email: string) {
        cy.get('#SearchEmail').clear().type(email);
    }

    clickSearchBtn() {
        cy.get('#search-customers').click();
    }
    
    editUser(email: string){
        cy.get('#customers-grid>tbody>tr td:nth-child(2)').each(($el,index)=>{
            if($el.text().includes(email)){
                cy.get('#customers-grid>tbody>tr:nth-child(' +(index+1)+ ') td:nth-child(9)>a').click()
            }
        })

    }


}
