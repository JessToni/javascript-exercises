const palindromes = function (string) {
    let changeString = string.toLowerCase().replace(/[^a-z]/g, "");
    let reversedString = changeString.split().reverse().join();
    return changeString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
