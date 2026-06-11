describe('Catalogo de productos', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  it('muestra productos despues del login', function () {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(this.users.validUser.username)
    cy.get('#password').type(this.users.validUser.password)
    cy.get('#login-button').click()
    cy.get('.inventory_item').should('have.length', 6)
  })

  it('ordenar productos de menor a mayor precio', function () {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(this.users.validUser.username)
    cy.get('#password').type(this.users.validUser.password)
    cy.get('#login-button').click()
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('.inventory_item_price').first().should('contain', '7.99')
  })

  it('agregar producto al carrito', function () {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(this.users.validUser.username)
    cy.get('#password').type(this.users.validUser.password)
    cy.get('#login-button').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('ver detalle de un producto', function () {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(this.users.validUser.username)
    cy.get('#password').type(this.users.validUser.password)
    cy.get('#login-button').click()
    cy.get('.inventory_item_name').first().click()
    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_price').should('be.visible')
  })
})
