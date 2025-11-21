it('Login com campos email e senha em branco', () => { 
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#username').clear()
  cy.get('#password').clear()
  cy.get('input[value="Login"]').click()

  cy.get('.woocommerce-error li').should('contain.text', 'Nome de usuário é obrigatório')
  //Sugestão de melhoria: modificar mensagem de erro para "Nome de usuário/e-mail e senha são obrigatórios."

})