const repeatString = function(string, num) {
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString = repeatedString + string;
    }
};

console.log(repeatString("hey", 5));

// Do not edit below this line
module.exports = repeatString;
