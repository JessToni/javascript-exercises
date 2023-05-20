const sumAll = function(one, two) {
    if (typeof one !== "number" || typeof two !== "number") {
        return "ERROR"
    }

    let total = 0;
    let start = one;
    let end = two;

    if (one > two) {
        start = two;
        end = one;
    } else if (one < 0 || two < 0) {
        return "ERROR"
    }

    for (let i = start; i <= end; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
