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
    //    const userId = new ObjectId(req.params.id);

    const result1 = await modelUser.findById(req.params.id);

    res.json(result1);
    //console.log("getoneid function");
}

module.exports = { getAllContacts, getOneId };