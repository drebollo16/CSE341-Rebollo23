const mongoose = require('mongoose');

const modelUser = require('../DB/User');
// --const { request } = require('express');
//const { ObjectId } = require('mongodb');
//const ObjectId = require('mongodb').ObjectId;


const getAllContacts = async(req, res) => {
    const result = await modelUser.find();
    res.json(result);
    //console.log("get all contacts func");
}

async function getOneId(req, res) {
    //const userId = new ObjectId(req.params.id);
    const result1 = await modelUser.findById(req.params.id);
    res.json(result1);
    //console.log("getoneid function");
}

//create new user to mongodb
const createUser = async(req, res) => {
    const newUser = await modelUser.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Birthday: req.body.Birthday,
        email: req.body.email,
        FavoriteColor: req.body.FavoriteColor
    });
    const created = await modelUser.createCollection(createUser, newUser);

    if (created) {
        res.status(201).json(created);
    } else {
        res.status(500).json(created.error || 'error occurred while creating a new user');
    }
    //createUser({ newUser });
    //created.save(); 
    //console.log('saved');
}

//update user info by _id to monogodb
const updateUser = async(req, res) => {
    const UserId = await modelUser.findById(req.params.id);
    const infoUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Birthday: req.body.Birthday,
        email: req.body.email,
        FavoriteColor: req.body.FavoriteColor
    }
    const update = await modelUser.findByIdAndUpdate(UserId, infoUser);

    if (update.acknowledged) {
        res.status(204).json(update);
    } else {
        res.status(500).json(update.error || 'error occured while updating the contact.');
    }
    //createUser({ newUser });
    //created.save();
    //console.log('saved');
}


//delete user by _id
const DeleteUser = async(req, res) => {
    const UserId = await modelUser.findById(req.params.id);
    const infoUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Birthday: req.body.Birthday,
        email: req.body.email,
        FavoriteColor: req.body.FavoriteColor
    }
    const update = await modelUser.deleteOne(UserId, infoUser);

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