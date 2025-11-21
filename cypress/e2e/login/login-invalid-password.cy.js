it('Login com senha incorreta', () => { 
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#username').type('email@teste.com.br')
  cy.get('#password').type('321654987')
  cy.get('input[value="Login"]').click()

  cy.get('.woocommerce-error li').should('contain.text', 'A senha fornecida para o e-mail').and('contain.text', 'está incorreta')

})