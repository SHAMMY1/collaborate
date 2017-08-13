const init = () => {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('<html><head></head><body><h1>COLLABORATE</h1></body></html>');
    });

    return Promise.resolve(app);
};

module.exports = { init };
