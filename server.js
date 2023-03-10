const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const connectDB = require('./DB/connection');


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

/*
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
*/


const port = process.env.PORT || 3000;
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


connectDB();

app
//added swagger
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(cors())
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));



//app.use('/', require('./routes'))
//connectDB();

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});