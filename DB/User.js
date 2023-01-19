const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

/*
const userId = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    }
});

*/
module.exports = User = mongoose.model('User', user);


//module.exports = userId = mongoose.model('UserId', userId);