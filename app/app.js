const init = () => {
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        res.send('<h1>COLLABORATE</h1>')
    })

    return Promise.resolve(app);
}

module.exports = { init }
