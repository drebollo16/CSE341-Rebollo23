const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Denise rebollo!!');
});

module.exports = routes;