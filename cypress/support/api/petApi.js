class PetApi {
  findByStatus(status) {
    return cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`,
      headers: { accept: 'application/json' }
    })
  }

  addPet(pet) {
    return cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: pet,
      headers: { accept: 'application/json' }
    })
  }

  getPetById(id) {
    return cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${id}`,
      headers: { accept: 'application/json' }
    })
  }
}

export default new PetApi() 