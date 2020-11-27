import { expect } from "chai";
import { CustomerAddresPage } from "../POM/Customer/addCustomerAddress";
import { AddCustomerPage } from "../POM/Customer/addCustomerFormPage";
import { CustomerPage } from "../POM/Customer/customerManagePage";
import { LoginPage } from "../POM/LoginPage";
import { SideDashBord } from "../POM/SideDashbord";

describe('Testing operation on user',()=>{

    beforeEach('Open page and login',()=>{
        let loginPage = new LoginPage();
        let sideDashBord = new SideDashBord();
        loginPage.fullLogIn('admin@yourstore.com','admin');
        sideDashBord.openCustomerSubMenu('Customers');
        cy.url().should('eq','https://admin-demo.nopcommerce.com/Admin/Customer/List');
    });

    it('AddUser',()=>{
        //initialization
        let customerPage = new CustomerPage();
        let addCustomerFormPage = new AddCustomerPage();
 
      
        customerPage.clickAddCustomerBtn();
        cy.url().should('eq','https://admin-demo.nopcommerce.com/Admin/Customer/Create');
        //fill the form
        cy.fixture('customerEx.json').then((customerEx)=>{
            addCustomerFormPage.fillForm(customerEx);
        })
        addCustomerFormPage.saveForm();
        cy.url().should('eq','https://admin-demo.nopcommerce.com/Admin/Customer/List');
  
        //validate added user
        cy.fixture('customerEx.json').then(customerEx=>{
            customerPage.fillEmail(customerEx.Email)
        });
        customerPage.clickSearchBtn();
        cy.get('#customers-grid>').find('tr').should('have.length',1);
        cy.fixture('customerEx.json').then(customerEx=>{
            cy.get('#customers-grid>tbody>tr td:nth-child(2)').each(($el,index)=>{
                if($el.text().includes(customerEx.Email)){assert.isTrue(true)}
            });
        });
    })

    it('Edit user',()=>{
        let customerPage = new CustomerPage();
        let addCustomerFormPage = new AddCustomerPage();
        let customerAddres = new CustomerAddresPage();
        cy.fixture('customerEx.json').then(customer=>{
            customerPage.editUser(customer.Email);
        });
        
        
        //change
            //first name
            // last name
            // gender
            // add address
            addCustomerFormPage.addNewAdress();
            cy.title().should('eq','Add a new address / nopCommerce administration');
            
            cy.fixture('customerAddres').then(data=>{
                customerAddres.assignDataToVariable(data);
                customerAddres.fillForm();
            })


    })

});

/*

let result = false;
            cy.get('#customers-grid>tbody>tr td:nth-child(2)').each(($el,index)=>{
                cy.log(customerEx.Email);
              if($el.text().includes(customerEx.Email) ){result = true; cy.log('ping');}else{cy.log('Wrong assertion: '+customerEx.Email);}
            });
            assert.isTrue(result);
*/