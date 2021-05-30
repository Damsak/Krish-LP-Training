const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')


const BinarySearch = require('./Algorithms/BinarySearch');
const LinearSearch = require('./Algorithms/LinearSearch');
const BubbleSort = require('./Algorithms/BubbleSort');
const MergeSort = require('./Algorithms/MergeSort');
const QuickSort = require('./Algorithms/QuickSort');
const SelectionSort = require('./Algorithms/SelectionSort');


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


app.get('/answersbinarysearch', (req, res) => {
  res.render('answersbinarysearch',{ BinarySearch})
})


app.get('/answerslinearsearch', (req, res) => {
  res.render('answerslinearsearch',{ LinearSearch })
})

app.get('/answersbubblesort', (req, res) => {
  res.render('answersbubblesort',{ BubbleSort })
})


app.get('/answersmergesort', (req, res) => {
  res.render('answersmergesort',{ MergeSort })
})


app.get('/answersquicksort', (req, res) => {
  res.render('answersquicksort',{ QuickSort })
})


app.get('/answersselectionsort', (req, res) => {
  res.render('answersselectionsort',{ SelectionSort })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


