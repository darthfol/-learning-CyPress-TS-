export class CustomerAddresPage{
    protected dataAdress :dataAdress;
    constructor(){
        this.dataAdress = {
            firstName: '',
            lastName: '',
            email: '',
            country:'',
            city:'',
            zipCode:'',
            phoneNumber:'',
            address1:''
            
        };
    }
   
    assignDataToVariable(dane:dataAdress){
        this.dataAdress.firstName = dane.firstName;
        this.dataAdress.lastName = dane.lastName;
        this.dataAdress.email = dane.email;
        this.dataAdress.country = dane.country;
        this.dataAdress.city = dane.city;
        this.dataAdress.zipCode = dane.zipCode;
        this.dataAdress.phoneNumber = dane.phoneNumber;
        this.dataAdress.address1= dane.address1
    }
    getFirstName(){
        return this.dataAdress.firstName;
    }
    
    fillFirstName(firstName: string){
        cy.get('#Address_FirstName').clear().type(firstName);
    }
    
    fillLastName(lastName: string){
        cy.get('#Address_LastName').clear().type(lastName);
    }

    fillEmail(email: string){
        cy.get('#Address_Email').clear().type(email);
    }

    selectCountry(country:string){
        cy.get('#Address_CountryId').select(country);
    }

    fillCity(city:string){
        cy.get('#Address_City').clear().type(city);
    }
    
    fillAddress1(adress:string){
        cy.get('#Address_Address1').clear().type(adress)
    }
    fillZipCode(zipCode:string){
        cy.get('#Address_ZipPostalCode').clear().type(zipCode);
    }

    fillPhoneNUmber(phoneNumber:string){
        cy.get('#Address_PhoneNumber').clear().type(phoneNumber);
    }
    
    fillForm(){
        this.fillFirstName(this.dataAdress.firstName);
        this.fillLastName(this.dataAdress.lastName);
        this.fillEmail(this.dataAdress.email);
        this.selectCountry(this.dataAdress.country);
        this.fillCity(this.dataAdress.city);
        this.fillAddress1(this.dataAdress.address1);
        this.fillZipCode(this.dataAdress.zipCode);
        this.fillPhoneNUmber(this.dataAdress.phoneNumber);
    }

    
}

interface dataAdress{
    firstName: string,
    lastName: string,
    email: string,
    country:string,
    city:string,
    zipCode:string,
    phoneNumber:string,
    address1: string
}