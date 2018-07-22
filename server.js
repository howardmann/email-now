// Core dependencies
let express = require('express')
let bodyParser = require('body-parser')
let knex = require('./db/knex')

// Controllers
let emails = require('./controllers/emails')


// Express
let app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res, next) => res.json({status: 'ok'}))

// Email API routes
app.get('/api/email/:email', emails.show)
app.get('/api/email/', emails.index)
app.post('/api/email', emails.create)


// Catch and send error messages
app.use(function (err, req, res, next) {
  if (err) {
    res.status(422).send({
      error: err.message
    });
  } else {
    next();
  }
});


const PORT = 3000

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
})