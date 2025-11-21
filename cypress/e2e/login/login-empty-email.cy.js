it('Login com campo e-mail em branco', () => { 
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#username').clear()
  cy.get('#password').type('testeQA!@#$%987')
  cy.get('input[value="Login"]').click()

  cy.get('.woocommerce-error li').should('contain.text', 'Nome de usuário é obrigatório')

})