var express = require("express");
var olo = require("../welcome");
var app = express();
 var a = 3;
 var b = 4

app.get("/", function(request, response){

    response.end("OLOLO");
});
app.listen(3000);