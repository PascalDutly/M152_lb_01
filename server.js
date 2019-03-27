var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require('fs')
    , gm = require('gm').subClass({imageMagick: true});

var app = express();

app.use(express.static('public'));

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
});

app.get('/resize', function (req, res){
gm('/public/mario.png')
    .resize(40, 40)
    .noProfile()
    .write('/resize/resize.png', function (err) {
        if (!err) console.log('done');
    });
});

app.get('/', function (req, res) {
    res.send(200);
});

app.get('/home', function (req, res) {
   res.send('Home');
});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
});

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
});

var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]);
app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  req.files['avatar'][0] -> File
    //  req.files['gallery'] -> Array
    //
    // req.body will contain the text fields, if there were any
});

app.listen(process.env.PORT || 80, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});
