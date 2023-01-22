const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts');


router.get('/', (req, res) => {
    res.send('CSE 341 - Assignments');
});



//routes.get('/contacts');

router.use('/contacts', require('./contacts'));

//added to get contacts by ID
//routes.get('/: id ', contactController.getOneId);

module.exports = router;