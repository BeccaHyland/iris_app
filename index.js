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
app.get('/irises/search/class/:class', db.getIrisesByClass)
app.get('/irises/search/location/:location', db.getIrisesByLocation)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
