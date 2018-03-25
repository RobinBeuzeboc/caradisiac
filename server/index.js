const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const populate = require('./mods/populate')
const suv = require('./mods/suv')

app.use(bodyParser.json())

// const router = express.Router()

app.get('/populate', (req, res) => {
  populate.addInElastic((err, results) => {
    res.json(results);
  })
})

app.get('/suv', (req, res) => {
  suv.sortSuv((err, results) => {
    res.json(results)
  })
})

const port = 9292
app.listen(port, () => {
  console.log("Listening on port " + port);
})
