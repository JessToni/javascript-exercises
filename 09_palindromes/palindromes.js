const palindromes = function (string) {
    let splitString = string.split("");
    let reversedString = splitString.reverse();

    if (reversedString === splitString) {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
