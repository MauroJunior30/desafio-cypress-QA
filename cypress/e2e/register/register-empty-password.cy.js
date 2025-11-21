it('Tentativa de cadastro com campo senha em branco', () => { 
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.get('i[class="icon-user-unfollow icons"]').click()
  cy.get('#reg_email').type('teste@user.com.br')
  cy.get('#reg_password').clear()
  cy.get('input[value="Register"]').click()

  cy.get('.woocommerce-error li').should('contain.text', 'Digite a senha da conta')
})