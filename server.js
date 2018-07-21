// Core dependencies
let express = require('express')
let bodyParser = require('body-parser')

// Utils
let {validPayload,highlightErrors} = require('./src/email.js')

// Express
let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send({status: 'ok'})
})

app.post('/api/email', (req, res, next) => {
  let payload = req.body
  if (validPayload(payload)){
    // TODO: DB SEND
    // TODO: EMAIL NOTIFICATION
    return res.send({status: 'payload vaid success'})    
  }
  return res.send(highlightErrors(payload))
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
})