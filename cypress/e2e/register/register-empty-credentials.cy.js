it('Tentativa de cadastro com campos e-mail e senha em branco', () => { 
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#reg_email').clear()
  cy.get('#reg_password').clear()
  cy.get('input[value="Register"]').click()

  cy.get('.woocommerce-error li').should('contain.text', 'Informe um endereço de e-mail válido')
})