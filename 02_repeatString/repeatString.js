const repeatString = function(string = "hey", num = 10) {
    let repeatString = new String();
    for (let i = 0; i < num; i++) {
        repeatString = repeatString + string;
    }
};

console.log(repeatString("hey", 5));

// Do not edit below this line
module.exports = repeatString;
