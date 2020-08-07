const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.resolve( __dirname, '..','Client', 'build' , 'index.html'))
});
 
app.use(require('./routerOW'));  

module.exports = app;