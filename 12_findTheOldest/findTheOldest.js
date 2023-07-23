const findTheOldest = function(array) {
    let date = new Date();
    date = date.getFullYear();

    const oldest = array.sort(function(a, b) {
        const lastPerson = (a.yearOfDeath || date) - a.yearOfBirth;
        const nextPerson = (b.yearOfDeath || date) - b.yearOfBirth;

        return (lastPerson > nextPerson ? -1:1)
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
