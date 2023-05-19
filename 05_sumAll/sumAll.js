const sumAll = function(one, two) {
    let total = 0;
    let start = one;
    let end = two;

    if (one > two) {
        start = two;
        end = one;
    }

    for (let i = start; i <= end; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
