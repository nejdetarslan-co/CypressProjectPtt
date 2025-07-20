import SearchPage from '../../support/pages/SearchPage'
import ProductDetailPage from '../../support/pages/ProductDetailPage'
import FavoritePage from '../../support/pages/FavoritePage'

describe('Senaryo 2: Favorilere Ürün Ekleme', () => {
  let user;
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      user = users[0]
      cy.login(user.email, user.password, user.name)
    })
  })

  it('Kullanıcı ürün arar, 4. ürünü favorilere ekler ve favori listesini kontrol eder', () => {
    SearchPage.searchFor('telefon')
    SearchPage.selectProductByIndex(4)
    ProductDetailPage.getProductName().then((productName) => {
      ProductDetailPage.addToFavorites()
      cy.get('span.user-login').click()
      cy.contains('.rounded.transition-all span', 'Listelerim').click()
      cy.log('Favori listesine gidildi')
      FavoritePage.assertProductInFavorites(productName)
      FavoritePage.assertOnFavoritesPage()
    })
  })
})
afterEach(() => {
  cy.clearLocalStorage()
  cy.clearCookies()
})
