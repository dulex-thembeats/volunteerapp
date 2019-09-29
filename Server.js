var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs')
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'Public')));

//database config

//database config end
app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/home', (req, res) => {
    res.render('index.ejs');
})

app.get('/about', (req, res) => {
    res.send('about page');
})


app.get('/admin', (req, res) =>{
var message = 'please provide your credentials'
    res.render('login.ejs',{
        message: message
    });
})


app.get('/blog', (req, res) => {
    res.render('blog.ejs');
})

app.post('/blog', (req, res) => {
    res.send('yeah i know')
})


app.post('/admin', (req, res) => {

});

app.get('/dashboard', (req, res) => {

    var message = 'welcome '
    res.render('dashboard.ejs', {message:message})

})




app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})