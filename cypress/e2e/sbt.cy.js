/// <reference types="cypress" />
describe('example to-do app', () => {
    
    it('Validates PractiTest Page', () => {
    // Visit PractiTest
        cy.visit('https://www.practitest.com/');
    
    // Hover on "Products" and select "Test Automation Management"
    cy.contains('Products').trigger('mouseover',{force:true});
    
    cy.contains('Test Automation Management',{force:true}).click({force:true});

    // Validate Page Header
    cy.get('h1').should('contain', 'Orchestrate Automated and Manual Testing');

    // Validate the quote by Jiawei Wangg
    //cy.contains('Jiawei Wangg').should('exist');
    //y.xpath("//body/div[3]/div[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[1]").should('exist')
    cy.get('#general > .chess-quote > .flex-row > .flex-column > .flex_feedback > .feedback_container > .feedback_container_description > :nth-child(1)').should('exist')
    
    // Validate the quote by Mohita Prasad
    //cy.contains('Mohita Prasad').should('exist');
    cy.get('#test-execution > .chess-quote > .flex-row > .flex-column > .flex_feedback > .feedback_container > .feedback_container_description > :nth-child(1)').should('exist')


  })
})