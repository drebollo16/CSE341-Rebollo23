const express = require('express');
const router = express.Router();

const contactsRoute = require('../controllers/contacts');

//get all contacts 
router.get('/', contactsRoute.getAllContacts);

//get user info by id
router.get('/:id', contactsRoute.getOneId);

//post create function
router.post('/', contactsRoute.createUser);

//put update person info by id
router.put('/:id', contactsRoute.updateUser);

//delete user
router.delete('/:id', contactsRoute.DeleteUser);

module.exports = router;