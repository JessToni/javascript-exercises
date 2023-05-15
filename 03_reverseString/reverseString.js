const reverseString = function(string = "hey") {
    let reversedString = "";
    let reverseCount = -1;
    
    for (let i = 0; i < string.length; i++) {
        reversedString += string[reverseCount];
        reverseCount--;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
