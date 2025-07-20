import LoginPage from '../../support/pages/LoginPage'

describe('Login Test', () => {
  it('Kullanıcı başarılı şekilde giriş yapabiliyor mu?', () => {
    cy.fixture('users').then((users) => {
      const user = users[0]
      LoginPage.visit()
      LoginPage.openLoginModal()
      LoginPage.fillEmail(user.email)
      LoginPage.fillPassword(user.password)
      LoginPage.submit()
      LoginPage.assertUser(user.name)
    })
  })
}) 