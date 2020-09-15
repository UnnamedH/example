var express = require("express");
var app = express();
var http = require('http').Server(app);

//const { Client } = require('pg')
/*const client = new Client()ss
client.connect()
  
  client.connect()
*/
app.get("/",function(req, res){
    res.send("Success!");
});



http.listen(process.env.PORT || 3000);