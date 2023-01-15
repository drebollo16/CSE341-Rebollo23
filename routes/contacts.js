const express = require('express');
const router = express.Router();

const contactsRoute = require('../controllers/contacts');

router.get('/', contactsRoute.getAllContacts);

router.get('/:id', contactsRoute.getId);

module.exports = router;