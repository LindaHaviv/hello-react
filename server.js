var express = require('express');

//create our app
var app = express();

//let's you add functionality to your express application
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});