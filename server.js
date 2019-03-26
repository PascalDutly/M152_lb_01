var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/home', function (req, res) {
   res.send('Home');
});

app.listen(process.env.PORT || 80, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});
