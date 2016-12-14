const express = require('express');
const router = require('./app/router.js');

const app = express();

app.locals.moment = require('moment');

// Use Jade for Views
app.set('view engine', 'pug');

// Set Views Folder
app.set('views', './app/views');

// Include Public Folder for CSS, JS and Images
app.use(express.static('public'));

app.use('/', router);

app.listen(3033, () => {});
