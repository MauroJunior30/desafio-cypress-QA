it('Login com e-mail incorreto', () => { 
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#username').type('email@teste')
  cy.get('#password').type('testeQA!@#$%987')
  cy.get('input[value="Login"]').click()

  cy.get('.woocommerce-error li').should('contain.text', 'O usuário').and('contain.text', 'não está registrado neste site')

})