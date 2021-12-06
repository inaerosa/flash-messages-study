const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// Parse JSON data
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Set Cookie Parser, Sessions & Flash
app.use(cookieParser('SecretStringForCookies'))
app.use(session({
    secret: 'SecretStringForSession',
    cookie: {maxAge:6000}, 
    resave: true,
    saveUninitialized: true
}))

app.use(flash());

// View Engine - EJS
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const username = req.flash('user')

    res.render('pages/index', { username })
})

app.post('/', (req,res) => {
    req.flash('user', req.body.username)
    res.redirect('/');
})

app.listen(3000, () => {
    console.log('running')
})