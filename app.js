const express = require('express');
const app = express();
const PORT = 3000
const hostName = '127.0.0.1'
const path = require('path')
const {engine} = require('express-handlebars')

app.use('/test', (req,res,next) => {
    console.log('middleware')
    next()
})

// for use to static files
app.use(express.static('public'))

app.engine('handlebars',engine());
app.set('view engine', 'handlebars')


app.get('/', (req,res) => {
    res.render('site/index')
})

app.get('/about', (req,res) => {
    res.render('site/about')
})

app.get('/blog',(req,res) => {
    res.render('site/blog')
})

app.get('/contact',(req,res) => {
    res.render('site/contact')
})

app.get('/login', (req,res) => {
    res.render('site/login')
})

app.get('/register', (req,res) => {
    res.render('site/register')
})

app.listen(PORT, () => {console.log(`App Listening on port ${PORT}`)})
