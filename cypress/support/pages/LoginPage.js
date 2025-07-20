class LoginPage {
  visit() {
    cy.visit('https://www.pttavm.com/')
  }
  openLoginModal() {
    cy.contains('Giriş Yap').click()
  }
  fillEmail(email) {
    cy.get('#login-email').type(email, { force: true })
  }
  fillPassword(password) {
    cy.get('#login-password').type(password, { force: true })
  }
  submit() {
    cy.get('button').contains('Giriş Yap').click()
  }
  assertUser(name) {
    cy.get('.main-user span.truncate')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.eq(name)
      })
  }
}

export default new LoginPage() 