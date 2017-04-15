// Node Express GraphQL Server
const request = require('request')
const express = require('express')
const events = require('events')
const emitter = new events.EventEmitter()
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'src/templates')

app.use(express.static('./src'))





app.get('/', (req, res) => {
  let refresh = (body) => {
    res.render('index', {'data': body})
  }

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

  request(options, function(err, res, body) {  
    refresh(body)
  })


  //res.render('index', { 'data': 'Initial page load' })
})

  // $.ajax({
  //   type: 'POST',
  //   url: 'localhost:3000/gimme-data',
  //   //contentType: 'application/json'
  //   dataType: 'json',
  //   data: {"query": "greet"},
  //   success: (data) => {
  //     res.render('index', { 'data': data })
  //   },
  //   error: (xhr, statusText, error) => {
  //     console.log('Oh fuck....')
  //     console.log(xhr, statusText, error)
  //   }
  // })

  // $('h1').text('boooo')
  // let xhr = new XMLHttpRequest();
  // xhr.responseType = 'json';
  // xhr.open("POST", "locahost:3000/gimme-data", true);
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.setRequestHeader("Accept", "application/json");
  // xhr.onload = function (e) {
  //   if (xhr.readyState === 4) {
  //     if (xhr.status === 200) {
  //       res.render('index', { 'data': xhr.response })
  //     } else {
  //       console.error(xhr.statusText);
  //     }
  //   }
  // }
  // xhr.onerror = function (e) {
  //   console.error(xhr.statusText);
  // }

  // xhr.send(JSON.stringify({query: "{ greet }"}));



let server = app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
