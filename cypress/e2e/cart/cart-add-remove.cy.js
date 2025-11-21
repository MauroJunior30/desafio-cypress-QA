it('Tentativa de realizar a compra sem informar os campos obrigatórios', () => {
  
  cy.visit('http://lojaebac.ebaconline.art.br')

  cy.contains('a', 'Circe Hooded Ice Fleece').click()
  cy.wait(1000)
  cy.get('li[data-value="M"]').click()
  cy.get('li[data-value="Purple"]').click()
  cy.get('button.single_add_to_cart_button.button.alt').click()
  cy.get('.woocommerce-message').should('contain.text', 'foi adicionado no seu carrinho')
  cy.contains('a', 'Ver carrinho').click()
  
  cy.get('a.checkout-button.button.alt.wc-forward').click()

  cy.get('#place_order').click()

  cy.get('li[data-id="billing_first_name"]').should('contain.text', 'é um campo obrigatório')
  cy.get('li[data-id="billing_last_name"]').should('contain.text', 'é um campo obrigatório')
  cy.get('li[data-id="billing_address_1"]').should('contain.text', 'é um campo obrigatório')
  cy.get('li[data-id="billing_city"]').should('contain.text', 'é um campo obrigatório')
  cy.get('li[data-id="billing_postcode"]').should('contain.text', 'não é um CEP válido')
  cy.get('li[data-id="billing_phone"]').should('contain.text', 'é um campo obrigatório')
  cy.get('li[data-id="billing_email"]').should('contain.text', 'é um campo obrigatório')
  cy.get('.woocommerce-error').should('contain.text', 'Leia e aceite os termos e condições para prosseguir com o seu pedido')

})