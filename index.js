var express = require('express');


// App Setup
var app = express();
// Setup the server 
var server = app.listen(4000, function(){
    console.log('SERVER IS RUNING PORT 4000');
});


// Static files
app.use(express.static('public'));