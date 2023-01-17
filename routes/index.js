const routes = require('express').Router();
const contactController = require('../controllers/contacts');
routes.get('/', (req, res) => {
    res.send('Denise rebollo');
});
routes.get('/contacts', contactController.getAllContacts);

//added to get contacts by ID
routes.get('/:id', contactController.getOneId);

module.exports = routes;