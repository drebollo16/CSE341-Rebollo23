const express = require('express');
const router = express.Router();

const contactsRoute = require('../controllers/contacts');

router.get('/', contactsRoute.getAllContacts);

router.get('/:id', contactsRoute.getOneId);

module.exports = router;