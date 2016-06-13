const
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  PORT = 3000,
  app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.route('/')
  .get((req, res) => {
    console.log('Get route works')
    res.send('Very nice')
  })
  .post((req, res) => {
    console.log(req.body)
    res.send('end of post process')
  })

app.listen(PORT, function(){
  console.log(`This is a transmission from ${PORT}`)
})
