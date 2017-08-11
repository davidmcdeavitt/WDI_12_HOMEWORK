var app = require('express')();
var requestApi = require('request');
const PORT = 5000;

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
  res.send('hello express');
});

app.get('/about', function(req,res) {
  res.render('about');
});
app.get('/search', function(req,res) {
  res.render('./search');
});



requestApi.get('http://omdbapi.com/?s=#{movie}&apikey=ENV', {
  'title': {
    'year': 'year',
    'type': 'type',
  }
});



app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
