const express = require('express');

const connectDB = require('./DB/connection');
const app = express();

connectDB();
app.use(express.json({ extended: false }));
//app.use('/API/userModel', require('./API/User'));



const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});