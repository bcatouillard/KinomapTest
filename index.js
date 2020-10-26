// Import Express Module
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const controller = require('./src/controllers/indexController');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Set Pug as our template engine
app.set('view engine', 'pug');

// Give to Express the Favicon
app.use(favicon(__dirname + '/public/images/kinomap.ico'));

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

// serve assets from node_modules
app.use('/assets', express.static(__dirname + '/node_modules/'));

// Set the server listening on port 7000
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

// Routing / to default.pug and set the title to Accueil
app.get('/', (req, res) => {
    controller.fillCarousel(req) 
    res.render('default', {
        title:  'Carousel',
        description: 'Bienvenue sur le test Kinomap de Benjamin Catouillard',
    });
});