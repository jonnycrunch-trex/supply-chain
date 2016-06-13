const
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  PORT = 3000,
  app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// general index route - probably will remove
app.route('/')
  .get((req, res) => {
    console.log('Get route works')
    res.send('Very nice')
  })
  .post((req, res) => {
    console.log(req.body)
    res.send('end of post process')
  })

app.route('/contract/:id')
  .get((req, res) => {
    res.send(`This happened at Contract ID #${req.params.id}`)
    res.end()
  })

app.route('/tx/:id')
  .get((req, res) => {
    res.send(`This happened at Transaction ID #${req.params.id}`)
    res.end()
  })

app.route('/tx/:id/send')
  .post((req, res) => {
    console.log('Transaction', req.params.id)
    res.json(req.body)
    res.end()
  })

app.route('/contract/:id/agree')
  .post((req, res) => {
    console.log('Contract', req.params.id)
    res.json(req.body)
    res.end()
  })

app.route('/tx/:id/call')
  .post((req, res) => {
    console.log('Transaction', req.params.id)
    res.json(req.body)
    res.end()
  })

app.listen(PORT, function(){
  console.log(`This is a transmission from ${PORT}`)
})
