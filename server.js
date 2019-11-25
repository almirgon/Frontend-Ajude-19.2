var express = require('express')
var app = express()
//app.use(express.static('app'))
app.get('*', (req, res) => {
     res.sendfile(__dirname + '/index.html')
     res.writeHead(200, {'Content-Type': 'text/javascript'}); 
    })
app.listen(process.env.PORT || 8000);

