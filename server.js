var express = require('express')
var path = require('path');
var app = express()
app.use(express.static(__dirname))
app.get('*', (req, res) => {
     res.sendfile(path.resolve('index.html'))
    })
app.listen(process.env.PORT || 8000);

