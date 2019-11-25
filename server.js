var express = require('express')
var app = require('express')()
app.use(express.static('app'))
app.get("/",(req, res) =>{
    res.redirect("/#/home")
})
app.listen(process.env.PORT || 8000);