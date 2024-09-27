

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://joaovitorlopesvieira.github.io/Teste/');

      cy.get('#nome').type('Joao Vitor Lopes Vieira');
cy.wait(3000);
      cy.get('#email').type('jlopesvieira170@gmail.com');
cy.wait(3000);
      cy.get('#telefone').type('(38)998951053');
cy.wait(3000);
      cy.get('#rua').type('Pedro Valadares Versiane');
cy.wait(3000);
      cy.get('#numero').type('39');
cy.wait(3000);
      cy.get('#cidade').type('Arinos');
cy.wait(3000);
      cy.get('#estado').select('Minas Gerais'); 
cy.wait(3000);
      cy.get('#interesses').type('Estou em busca de uma oportunidade de atuar como QA');
cy.wait(3000);
      cy.get('#newsletter').click();
cy.wait(3000);
      cy.get('button').click();

  })
  
})