require('../models')
const request = require('supertest')
const app = require('../app')

let artistId
const BASE_URL = '/api/v1/artists'

const artist = {
  name: 'Sebastian Yatra',
  country: 'Colombia',
  formationYear: 2010,
  image: 'lorem.png'
}

test("POST -> 'BASE_URL', should return statusCode 201, and res.body.name === artist.name", async () => {
  const res = await request(app)
    .post(BASE_URL)
    .send(artist)

  artistId = res.body.id

  expect(res.statusCode).toBe(201)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(artist.name)
})


test("GET -> 'BASE_URL' should return res status code 200 , res.body[0].name === artist.name and res.body.length = 1", async () => {

  const res = await request(app)
    .get(BASE_URL)

  expect(res.statusCode).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body).toHaveLength(1)
  expect(res.body[0].name).toBe(artist.name)
}); //!Luis Steven

test("Get -> 'BASE_URL/:id', should return status code 200, return res.body.name === artist.name ", async () => {
  const res = await request(app)
    .get(`${BASE_URL}/${artistId}`)

  expect(res.statusCode).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(artist.name)
}) //!Jesus Sanchez

test("PUT -> 'BASE_URL/:id', should return status code 200, and res.body.name === artistUpdate.name, ", async () => {

  const artistUpdate = {
    name: 'Ricardo Arjona'
  }

  const res = await request(app)
    .put(`${BASE_URL}/${artistId}`)
    .send(artistUpdate)

  expect(res.status).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(artistUpdate.name)
}) //! Jesus Carrasquilla

test("DELETE -> 'BASE_URL/:id', should return statusCode 204", async () => {
  const res = await request(app)
    .delete(`${BASE_URL}/${artistId}`)

  expect(res.status).toBe(204)
}) //! Antony Corpas and Uriel Morales