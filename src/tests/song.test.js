require('../models')

const request = require("supertest")
const app = require('../app')
const Album = require('../models/Album')
let song
let album

beforeAll(async () => {

  album = await Album.create({
    name: "hola",
    image: "hola.png",
    releaseYear: "2010-03-12"
  })

  song = {
    name: "No hay nadie mas",
    albumId: album.id
  }
})

afterAll(async () => {
  await album.destroy()
})

const BASE_URL = '/api/v1/songs'

test("POST -> 'BASE_URL', should returnt statusCode 201, and res.body.name === song.name", async () => {

  const res = await request(app)
    .post(BASE_URL)
    .send(song)

  expect(res.status).toBe(201)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(song.name)
  expect(res.body.albumId).toBe(song.albumId)
})