const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: `Welcome to Becca's Iris app`})
})

app.get('/irises', db.getIrises)

app.get('/search/irises/class/:class', db.getIrisesByClass)
app.get('/search/irises/class', (request, response) => {
  response.json( { message: `Enter a class name after /search/irises/class/[name here]`})
})

app.get('/search/irises/location/:location', db.getIrisesByLocation)
app.get('/search/irises/location', (request, response) => {
  response.json( { message: `Enter the integer of the location after /search/irises/location/[integer here]`})
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
