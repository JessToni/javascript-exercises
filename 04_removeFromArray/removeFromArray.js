const removeFromArray = function(array = [1, 2, 3, 4], findValue, findValue2) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === findValue) {
            array.splice(i, 1);
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === findValue2) {
            array.splice(i, 1);
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
