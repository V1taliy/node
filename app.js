var os = require("os");
var greeting = require("./greeting");
var User = require("./user.js");

var eugene = new User("Eugene", 32);
eugene.sayHi();

// var userName = os.userInfo().username;
//
//
// console.log(`Data of require: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// var http = require("http");
// var os =require("os");
// var greeting = require("./greeting");
//
// http.createServer(function(request, response){
//     response.end("Hello NodeJS");
// }).listen(3000, "127.0.0.1", function()  {
//     console.log("Server begin listen port 3000")
// var userName = os.userInfo().username;
//     console.log(userName);
// console.log(greeting);
// });