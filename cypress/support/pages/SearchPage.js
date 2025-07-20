class SearchPage {
  searchFor(productName) {
    cy.get('#search-main-input').type(productName + '{enter}')
  }
  selectProductByIndex(index) {
    cy.get('.product-box-list-grid > a').eq(index).click()
  }
}

export default new SearchPage() 