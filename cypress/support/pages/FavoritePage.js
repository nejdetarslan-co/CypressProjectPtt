class FavoritePage {
  assertProductInFavorites(productName) {
    cy.get('.app-product-box-name-title').should('contain', productName.trim())
  }
  assertOnFavoritesPage() {
    cy.url().should('include', 'my/listelerim')
    cy.title().should('contain', 'Listelerim - PttAVM')  
  }
}

export default new FavoritePage() 