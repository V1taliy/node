var currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function(name) {
    var hour = currentDate.getMinutes();
if(hour > 16)
    return "Good evening" + name;
else if (hour > 10)
    return "Dobruj den, " + name;
else return "Good morning" + name;
}