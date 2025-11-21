it('Fluxo de compra completo', () => {
  
  cy.visit('http://lojaebac.ebaconline.art.br')
  
  cy.contains('a', 'Circe Hooded Ice Fleece').click()
  cy.wait(1000)
  cy.get('li[data-value="M"]').click()
  cy.get('li[data-value="Purple"]').click()
  cy.get('button.single_add_to_cart_button.button.alt').click()
  cy.get('.woocommerce-message').should('contain.text', 'foi adicionado no seu carrinho')
  cy.contains('a', 'Ver carrinho').click()
  
  cy.get('a.checkout-button.button.alt.wc-forward').click()

  cy.get('#billing_first_name').type('Usuario')
  cy.get('#billing_last_name').type('Teste')
  cy.get('#select2-billing_country-container').click()
  cy.get('.select2-results__option').contains('Brasil').click()
  cy.get('#billing_address_1').type('Endereço para teste de compra')
  cy.get('#billing_city').type('Cidade Teste')
  cy.get('#select2-billing_state-container').click()
  cy.get('.select2-results__option').contains('Minas Gerais').click()
  cy.get('#billing_postcode').type('36770000')
  cy.get('#billing_phone').type('987654321')
  cy.get('#billing_email').type('email@teste.com.br')
  cy.get('#payment_method_cod').click()
  cy.get('#terms').check()
  cy.get('#place_order').click();

  cy.get('h1.page-title').should('have.text', 'Pedido recebido')

})