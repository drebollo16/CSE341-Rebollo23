const mongoose = require('mongoose');

const modelUser = require('../DB/User');

async function getAllContacts(req, res) {
    const result = await modelUser.find();
    res.json(result);

}

module.exports = { getAllContacts };