const repeatString = function(string, num) {
    let repeatString;
    for (let i = 0; i < num; i++) {
        repeatString = repeatString + string;
    }
};

console.log(repeatString("hey", 5));

// Do not edit below this line
module.exports = repeatString;
