const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    firstName: {
        type: String

    },
    lastName: {
        type: String,

    },
    Birthday: {
        type: String
    },
    FavoriteColor: {
        type: String
    },
    email: {
        type: String
    },
    versionKey: false
});


module.exports = User = mongoose.model('User', user);


//module.exports = userId = mongoose.model('UserId', userId);