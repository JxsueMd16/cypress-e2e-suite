describe('Login', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  it('login exitoso con credenciales validas', function () {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(this.users.validUser.username)
    cy.get('#password').type(this.users.validUser.password)
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
    cy.get('.inventory_list').should('be.visible')
  })

  it('error con usuario bloqueado', function () {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(this.users.lockedUser.username)
    cy.get('#password').type(this.users.lockedUser.password)
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'locked out')
  })

  it('error con credenciales invalidas', function () {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(this.users.invalidUser.username)
    cy.get('#password').type(this.users.invalidUser.password)
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('logout exitoso', function () {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(this.users.validUser.username)
    cy.get('#password').type(this.users.validUser.password)
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})
