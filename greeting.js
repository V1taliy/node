var currentDate = new Date();

global.date = currentDate;
module.exports.getMessage = function(){
    var hour = currentDate.getHours();
    if(hour > 16)
        return "Dobruj vecher, " + global.name;
    else if(hour > 10)
        return "Dobruj den, " + name;
    else
        return "dobrot ytro, " + name;
}



// var currentDate = new Date();
// module.exports.date = currentDate;
// module.exports.name = "Alice";
//
// module.exports.getMessage = function(name) {
//     var hour = currentDate.getMinutes();
// if(hour > 16)
//     return "Good evening" + name;
// else if (hour > 10)
//     return "Dobruj den, " + name;
// else return "Good morning" + name;
// }