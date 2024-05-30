const express = require('express');

//express app
const app = express();

// listen for requests
appp.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>homepage</p>');
    res.sendFile('./views/index.html', { root: __dirname });
})
app.get('/about', (req, res) => {
    // res.send('<p>aboutpage</p>');
    res.sendFile('./views/about.html', { root: __dirname });

});

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 page
app.use((req, res) => {
    res.statue(404).sendFile('./views/404.html', { root: __dirname });
})