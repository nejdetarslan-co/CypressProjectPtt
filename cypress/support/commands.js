import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'

Cypress.Commands.add('login', (email, password, name) => {
  LoginPage.visit()
  LoginPage.openLoginModal()
  LoginPage.fillEmail(email)
  LoginPage.fillPassword(password)
  LoginPage.submit()
  LoginPage.assertUser(name)
})
Cypress.Commands.add('searchProduct', (productName) => {
  SearchPage.searchFor('telefon')
  SearchPage.selectProductByIndex(4)
})