const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')

const NameSort = require('./NameSort3');


// Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))


//Set Templating Engine
app.use(expressLayouts)
app.set('layout','./width-layout.ejs')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index',{ NameSort })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


