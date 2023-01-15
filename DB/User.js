const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});


const userId = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    }
});
module.exports = User = mongoose.model('user', user);


//module.exports = userId = mongoose.model('userId', userId);