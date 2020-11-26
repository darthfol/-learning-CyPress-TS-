/// <reference types='cypress'/>

class SideDashbord {

    openCustomerSubMenu(option) {
        cy.get('.treeview:nth-child(4)').click();
        cy.get('.menu-open>ul>li').each(($element, index, $list) => {
            if ($element.text().includes(option)) {
                cy.wrap($element).click();
            }
        })
    }
}
export default SideDashbord;