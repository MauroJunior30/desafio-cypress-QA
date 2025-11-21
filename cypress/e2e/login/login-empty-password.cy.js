it('Login com campo senha em branco', () => { 
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#username').type('email@teste.com.br')
  cy.get('#password').clear()
  cy.get('input[value="Login"]').click()

  cy.get('.woocommerce-error li').should('contain.text', 'O campo da senha está vazio')

})