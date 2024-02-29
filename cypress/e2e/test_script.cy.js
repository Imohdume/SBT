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


  // Steps on running test using cypress automation tool  
  // 1. Run this command on your command prompt, assuming node.js is already installed : npm install cypress --save-dev
  // 2. run this command to open cypress : npx cypress open 
  // 3. Ensure you use the full repository seeing it contains all neccesary dependencies 
  // 4. Once cypress opens select your desired browser for this test 
  // 5. Open the repository using your referred IDE i suggest VSCode to view the test script  
  // 6. Once you select a browser from the cypress interface, naviagte e2e folder 
  // 7. Run the file under e2e with name test_script.cy.js
  // 8. once this is successful detials will be displayed correctly on the screen 
