it('Login válido do usuário', () => {
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#username').type('email@teste.com.br')
  cy.get('#password').type('testeQA!@#$%987')
  cy.get('input[value="Login"]').click()

  cy.get('h1.page-title').should('have.text', 'Minha conta')

})