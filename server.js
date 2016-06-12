const
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  PORT = 3000,
  app = express()



app.listen(PORT, function(){
  console.log(`This is a transmission from ${PORT}`)
})
