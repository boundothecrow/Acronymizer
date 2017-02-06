var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));

app.listen(8008, function() {
    console.log("\n\nRunning => localhost:8008 (hehe)\n\n");
});
