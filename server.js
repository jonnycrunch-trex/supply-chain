const
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  PORT = 3000,
  app = express(),
  Web3 = require('web3'),
  web3 = new Web3(),
  // Requidity = require('requidity'),
  // requidity = new Requidity(web3),
  fs = require('fs')
  solc = require('solc')

web3.setProvider(new web3.providers.HttpProvider('http://192.168.2.3:8545'))
// fs.chmodSync(process.cwd() + '/node_modules/solc/', 0777)

const contractAddress = web3.toHex('hello world')

// requidity('./transaction.sol')

fs.readFile('./transaction.sol', (err, buffer) => {
  if (err) throw err
  compiledContracts = solc.compile(buffer.toString(), 1)
  var MyContract = web3.eth.contract(compiledContracts.interface)
  console.log('contract instance works?', web3.isConnected())
  // var contractInstance = MyContract.at('9ae3e04119d11973645a6e7f9b08a4d8be55ff0d')

})
/*
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
    web3.eth.
    // console.log('Transaction', req.params.id)
    // res.json(req.body)
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
  console.log(web3.isConnected())
})
*/
