const routes = require('express').Router();
const contactController = require('../controllers/contacts');
routes.get('/', (req, res) => {
    res.send('Denise rebollo');
});
routes.get('/contacts', contactController.getAllContacts);

module.exports = routes;