import PetApi from '../../support/api/petApi'

describe('Petstore API', () => {
  it('GET: Statusu available olan petleri getirir', () => {
    PetApi.findByStatus('available').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.headers['content-type']).to.include('application/json')
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)
      response.body.forEach((pet) => {
        expect(pet).to.have.property('id')
        expect(pet).to.have.property('name')
        expect(pet).to.have.property('status')
        expect(pet.status).to.eq('available')
      })
    })
  })

  it('POST: Yeni bir pet ekler', () => {
    const randomId = Math.floor(Math.random() * 1000000)
    const pet = { id: randomId, name: 'PomKedi', status: 'available' }
    PetApi.addPet(pet).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.headers['content-type']).to.include('application/json')
      expect(response.body).to.be.an('object')
      expect(response.body).to.have.property('id', randomId)
      expect(response.body).to.have.property('name', 'PomKedi')
      expect(response.body).to.have.property('status', 'available')
    })
  })
}) 