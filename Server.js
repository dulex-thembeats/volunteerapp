var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs')
var path = require('path');
var {mongoose} = require('./server/db/mongoose.js');
var {Post} = require('./server/models/Posts');
var {user} = require('./server/models/user');
var{admin} = require('./server/models/admin');

var app = express();

var port = process.env.PORT || 5000;


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
});

app.post('/admin', (req, res) => {
});


// app.get('/blog', (req, res) => {
//     res.render('blog.ejs');
// })

// app.post('/blog', (req, res) => {
// })

app.post('/post', (req, res) => {
    var post = new Post({ 
        header: req.body.header,
        body: req.body.body
    });

    post.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/post', (req, res) => {

    Post.find().then((data) => {

        res.send({data})

    }, (e) => {
        res.status(400).send(e)
    })
})



// app.get('/dashboard', (req, res) => {
//     var message = 'welcome '
//     res.render('dashboard.ejs', {message:message})

// })




app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})