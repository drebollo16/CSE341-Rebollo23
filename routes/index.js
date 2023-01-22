const express = require('express');
const routes = express.Router();
const contactController = require('../controllers/contacts');


routes.get('/', (req, res) => {
    res.send('CSE 341 - Assignments');
});



//routes.get('/contacts');

routes.use('/contacts', require('./contacts'));

//added to get contacts by ID
//routes.get('/: id ', contactController.getOneId);

module.exports = routes;