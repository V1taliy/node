function displaySync(callback){
    callback();
}

console.log("Begin of program work");

setTimeout(function(){
    console.log("timeout1 500");
}, 500);

setTimeout(function(){
    console.log("timeout 100");
}, 100);

displaySync(function(){console.log("without timeout")});
console.log("End of program")


// function display(data, callback){
//
//     var randInt = Math.random()* (10 - 1) + 1;
//     var err = randInt>5? new Error("Error work, randInt bigger than 5"): null;
//
//     setTimeout(function(){
//         callback(err, data);
//     }, 0);
// }
// console.log("Begin of work program");
//
// display("Obrabotka dannux...", function(err, data){
//     if(err) throw err;
//     console.log(data);
// });
//
//
// console.log("Canceling work of program");



// var http = require("http");
//
// var message = "Hello World!2233334";
// http.createServer(function(request,response){
//
//     console.log(message);
//     response.end(message);
//
// }).listen(3000, "127.0.0.1",()=>{
//     console.log("Сервер начал прослушивание запросов");
// });