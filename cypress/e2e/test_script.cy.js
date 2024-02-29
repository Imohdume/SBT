/// <reference types="cypress" />
describe('Signature Bank Quality Assurance Exercise', () => {

  // Visit PractiTest
      beforeEach(() => {
      cy.visit('https://www.practitest.com/');
  
  // Hover on "Products" and select "Test Automation Management"
      cy.contains('Products').trigger('mouseover',{force:true});
      cy.contains('Test Automation Management',{force:true}).click({force:true});
      })
  
  // Validate Page Header
      it('Validate page header', () => {
          cy.get('h1').should('contain', 'Orchestrate Automated and Manual Testing');
      })
  
      // Validates the quote by “Jiawei Wangg”
      it('Validates the quote by “Jiawei Wangg”', () => {
          cy.get('#general > .chess-quote > .flex-row > .flex-column > .flex_feedback > .feedback_container > .feedback_container_description > :nth-child(2) > strong > em').then($personNameElement => {
              const personFullName = $personNameElement.text().trim();
              const personName = personFullName.split(',')[0].trim(); 
              // Assert that the element containing the person's name has the text "Jiawei Wang, QA architect at Oqton"
              expect(personFullName).to.equal('– Jiawei Wang, QA architect at Oqton');
              // select the element containing the quote
          cy.get('#general > .chess-quote > .flex-row > .flex-column > .flex_feedback > .feedback_container > .feedback_container_description').then($quoteElement => {
              const quoteText = $quoteElement.text().trim();
                // Assert that the quote contains the name of the person ("Jiawei Wang")
              expect(quoteText).to.contain(personName);
          })})})
  
   // Validates the quote by “Mohita Prasad”
   it('Validates the quote by “Mohita Prasad”', () => {
      cy.scrollTo('bottom')
      cy.get('#test-execution > .chess-quote > .flex-row > .flex-column > .flex_feedback > .feedback_container > .feedback_container_description > :nth-child(2) > strong > em').then($personNameElement => {
          const personFullName = $personNameElement.text().trim();
          const personName = personFullName.split(',')[0].trim(); 
          // Assert that the element containing the person's name has the text "Mohita Prasad, AST Corporation"
          expect(personFullName).to.equal('– Mohita Prasad, AST Corporation');
          // select the element containing the quote
          cy.get('#test-execution > .chess-quote > .flex-row > .flex-column > .flex_feedback > .feedback_container > .feedback_container_description').then($quoteElement => {
          const quoteText = $quoteElement.text().trim();
            // Assert that the quote contains the name of the person ("Mohita Prasad")
          expect(quoteText).to.contain(personName);
      })})})
  
  
  
  
  
  })