const getTheTitles = function(books) {
    arr = [];

    for (let book of books) {
        arr.push(book.title);
    }

    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
