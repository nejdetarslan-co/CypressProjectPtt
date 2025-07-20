class ProductDetailPage {
  getProductName() {
    return cy.get('h1').invoke('text')
  }
  getProductPrice() {
    return cy.get('.items-start .text-eGreen-700').invoke('text')
  }
  getProductQty() {
    return cy.get('.number-input-box.border-eGrey-300.py-3').eq(0).find('input').invoke('val')
  }
  addToCart() {
    cy.contains('Sepete Ekle').click()
  }
  clickGoToCartAfterAdd() {
    cy.contains('Sepete Git').click()
  }
  addToFavorites() {
    cy.contains('button, div', 'Favorilere Ekle').click()
  }
}

export default new ProductDetailPage() 