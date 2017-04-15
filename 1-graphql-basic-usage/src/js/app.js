// Client requests data from GraphQL server

const request = require('request')
const express = require('express')
const app = express()

// Set up EJS templates
app.set('view engine', 'ejs')
app.set('views', 'src/templates')

// On request to localhost:3000, query GraphQL
// server and render the response to the template
app.get('/', (req, res) => {
  
  // Render method
  let refresh = (rawData) => {
    let data = JSON.parse(rawData).data
    res.render('index', {'data': data.greet})
  }

  // Set request options
  const options = {  
    url: 'http://localhost:4000/gimme-data',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
    },
    body: JSON.stringify({query: "{ greet }"})
  }

  // Issue request
  request(options, function(err, res, body) {
    refresh(body)
  })
})

let server = app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
