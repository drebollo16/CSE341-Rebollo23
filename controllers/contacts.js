const mongoose = require('mongoose');
const modelUser = require('../DB/User');


const getAllContacts = async(req, res) => {
    const result = await modelUser.find();
    res.json(result);
}

async function getOneId(req, res) {
    const result1 = await modelUser.findById(req.params.id);
    res.json(result1);
}

//create new user to mongodb
const createUser = async(req, res) => {
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        FavoriteColor: req.body.FavoriteColor,
        Birthday: req.body.Birthday,
        email: req.body.email
    };
    const created = await modelUser.collection.insertOne(newUser);
    if (created) {
        res.status(201).json(created || 'Success');
    } else {
        res.status(500).json(created.error || 'error occurred while creating a new user');
    }
}

//update user info by _id to monogodb
const updateUser = async(req, res) => {
    const contactInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        FavoriteColor: req.body.FavoriteColor,
        Birthday: req.body.Birthday,
        email: req.body.email
    };
    const UserId = await modelUser.findById(req.params.id);
    // const update = await modelUser.findByIdAndUpdate(UserId, infoUser);
    const update = await modelUser.updateMany(UserId, contactInfo);
    if (update.acknowledged) {
        res.status(204).json(update || 'Updated');
    } else {
        res.status(500).json(update.error || 'error occured while updating the contact.');
    }
}

//delete user by _id
const DeleteUser = async(req, res) => {
    const UserId = await modelUser.findByIdAndDelete(req.params.id);
    const update = await modelUser.deleteOne(UserId);

    if (update.acknowledged) {
        res.status(204).json(update || 'deleted');
    } else {
        res.status(500).json(update.error || 'error happened while deleting user.');
    }
    //createUser({ newUser });
    //created.save();
    //console.log('saved');
}
module.exports = { getAllContacts, getOneId, createUser, updateUser, DeleteUser };