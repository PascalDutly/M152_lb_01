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

    /*gm('./public/*')
        .resize(40, 40)
        .noProfile()
        .write('./resize/sm_.png', function (err) {
            if (!err) console.log('done');
        });*/

app.get('/', function (req, res) {
    res.send(200);
});

app.get('/resize', function (req, res) {
   res.send('Home');
    gm('./public/*')
        .resize(40, 40)
        .noProfile()
        .write('./resize/small/imagesm.png', function (err) {
            if (!err) console.log('small resized');
        });
    gm('./public/*')
        .resize(100, 100)
        .noProfile()
        .write('./resize/medium/imagemd.png', function (err) {
            if (!err) console.log('medium resized');
        });
    gm('./public/*')
        .resize(400, 400)
        .noProfile()
        .write('./resize/large/imagelg.png', function (err) {
            if (!err) console.log('large resized');
        });
});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
});

/*app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
});*/

var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]);
app.post('/cool-profile', cpUpload, function (req, res, next) {

});

app.listen(process.env.PORT || 80, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});
