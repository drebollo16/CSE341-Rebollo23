/*const { MongoClient } = require('mongodb');


/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
/*const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";

*/


const mongoose = require('mongoose');


const URI = "mongodb+srv://drebolllo23:Maxwyatt09%40@cluster0.dmx3xgc.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('DB is Connected');
};
//added due to error 
mongoose.set("strictQuery", false);

module.exports = connectDB;