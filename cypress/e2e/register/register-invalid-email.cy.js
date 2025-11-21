it('Tentativa de cadastro com e-mail inválido', () => { 
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#reg_email').type('email@testecombr')
  cy.get('#reg_password').type('testeQA!@#$%987')
  cy.get('input[value="Register"]').click()

  cy.get('.woocommerce-error li').should('contain.text', 'Informe um endereço de e-mail válido')
})