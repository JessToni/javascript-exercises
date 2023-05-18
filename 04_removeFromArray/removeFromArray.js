const removeFromArray = function(array = [1, 2, 3, 4], findValue) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === findValue) {
            array.splice(i, 1);
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
