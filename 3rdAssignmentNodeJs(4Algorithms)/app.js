const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')

const thirdLargest = require('./Algorithms/3rdlargest');
const missingNumber = require('./Algorithms/missingNumber');
const repetitionCharacters = require('./Algorithms/repetitionCharacters');
const anagramCheck = require('./Algorithms/anagramCheck');



// Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))


//Set Templating Engine
app.use(expressLayouts)
app.set('layout','./layouts/width-layout.ejs')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/thirdLargest', (req, res) => {
  res.render('answers3rdLargest',{ thirdLargest })
})

app.get('/missingNumber', (req, res) => {
  res.render('answerMissingNumber',{ missingNumber })
})


app.get('/repetition', (req, res) => {
  res.render('answersRepetition',{ repetitionCharacters })
})

app.get('/anagram', (req, res) => {
  res.render('answersAnagramCheck',{ anagramCheck })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


