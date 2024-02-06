//simple express server
var express = require('express');
var app = express();
var path = require('path');

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//serve index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//start server
app.listen(3000, function () {
    console.log('Server started on port 3000');
});

