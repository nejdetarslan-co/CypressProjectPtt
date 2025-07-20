import SearchPage from '../../support/pages/SearchPage'
import ProductDetailPage from '../../support/pages/ProductDetailPage'

describe('Senaryo 1: Sepet Kontrolü', () => {
  let user;
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      user = users[0]
      cy.login(user.email, user.password, user.name)
    })
  })

  it('Kullanıcı ürün arar, 4. ürünü sepete ekler ve sepeti kontrol eder', () => {
    SearchPage.searchFor('telefon')
    SearchPage.selectProductByIndex(4)
    ProductDetailPage.getProductName().then((productName) => {
      ProductDetailPage.getProductPrice().then((productPrice) => {
        ProductDetailPage.getProductQty().then((productQty) => {
          ProductDetailPage.addToCart()
          ProductDetailPage.clickGoToCartAfterAdd()
          cy.title().should('contain', 'Sepet - PttAVM')
          cy.get('.relative .absolute.w-4').should('contain', '1')
          cy.get('.shopping-cart-item-info-name span').should('contain', productName.trim())
          cy.get('.flex.mt-1 span').should('contain', productPrice.trim())
          cy.get('.number-input-box-content-input').eq(0).invoke('val').should('eq', productQty)
        })
      })
    })
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })
})