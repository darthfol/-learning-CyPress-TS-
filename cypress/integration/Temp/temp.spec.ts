import { CustomerAddresPage } from "../POM/Customer/addCustomerAddress";
import { LoginPage } from "../POM/LoginPage"
import { SideDashBord } from "../POM/SideDashbord";

it('test',()=>{
    let login = new LoginPage();
    let sideDashBord = new SideDashBord();
    let addCustomerAddres = new CustomerAddresPage();
    
    cy.fixture('customerAddres').then(function(data){
        addCustomerAddres.assignDataToVariable(data);
    })
    cy
    cy.log(addCustomerAddres.getFirstName());

})