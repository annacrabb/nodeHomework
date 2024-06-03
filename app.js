const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//express app
const app = express();
//connect to mondodb
const dbURI = 'mongodb+srv://<newuser>:<newuser>@cluster0.sslpwey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true });
//register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
  });

app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
  });

app.get('/', (req, res) => {
    const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
    // res.send('<p>homepage</p>');
    res.render('index', { title: 'Home', blogs });
})
app.get('/about', (req, res) => {
    // res.send('<p>aboutpage</p>');
    res.render('about', { title: 'About'});

});

app.get('/blogs/create', (req, res) =>{
    res.render('create', { title: 'Create a Blog'});
});

//404 page
app.use((req, res) => {
    res.statue(404).sendFile('404', { title: '404'});
})