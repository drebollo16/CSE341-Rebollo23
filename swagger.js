const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Contacts Description',
    },
    host: '/cserebollo.onrender.com',
    schemes: ['https'],
};
/*
const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};*/


//const outputFile = './path/swagger-output.json';
const outputFile = './swagger.json';

//const endpointsFiles = ['./path/endpointsUser.js', './path/endpointsBook.js'];

/**********added changed from index.js */
const endpointsFiles = ['./routes/index.js'];


/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);

/*
swaggerAutogen(outputFile, endpointsFiles, doc).then(async() => {
    await
    import ('./server.js');
})*/