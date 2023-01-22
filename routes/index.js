const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');

/*
routes.get('/', (req, res) => {
    res.send('Denise rebollo');
});*/



//routes.get('/contacts');

router.use('/contacts', require('./contacts'));

//added to get contacts by ID
//routes.get('/: id ', contactController.getOneId);

module.exports = router;