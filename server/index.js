const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const populate = require('./mods/populate')
const suv = require('./mods/suv')



const port = 9292
app.listen(port, () => {
  console.log("Listening on port " + port);
})
