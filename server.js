var db = require('./models');

var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.get('/', function homepage (req, res) {
 // inside the GET / route
res.sendFile('views/index.html' , { root : __dirname});
});


app.listen(process.env.PORT || 3000, function () {
  console.log('Fantasy app listening at port 3000');
});
