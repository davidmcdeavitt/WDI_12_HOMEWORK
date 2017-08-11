const PORT = 5000;

var app = require('express')();

// var app = express();

app.get("/", function(req, res){
    res.send('hello world');

});

app.listen(PORT);