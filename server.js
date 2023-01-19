const express = require('express');

const connectDB = require('./DB/connection');
const app = express();



// app.use(express.json());
/*
app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
    });
    */
//app.use('/API/userModel', require('./API/User'));



const port = process.env.PORT || 3000;

app.use('/', require('./routes'))
connectDB();

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});