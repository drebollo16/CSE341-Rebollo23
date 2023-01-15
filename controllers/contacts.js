const mongoose = require('mongoose');

const modelUser = require('../DB/User');
const ObjectId = require('mongodb').ObjectId;


async function getAllContacts(req, res) {
    const result = await modelUser.find();
    res.json(result);

}

async function getOneId(req, res) {
    const userId = new ObjectId(req.params.id);
    const result = await mongoose.find({ _id: userId })

    res.json(result);
}

module.exports = { getAllContacts, getOneId };