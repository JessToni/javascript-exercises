const fibonacci = function(number) {
    let arr = [];
    for (let i = 0; i < number; i++) {
        if (arr.length <= 1) {
            arr.push(1);
        } else {
            nextFib = arr[i-1] + arr[i-2];
            arr.push(nextFib);
        }
    }

    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
