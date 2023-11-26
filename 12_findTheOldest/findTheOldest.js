const findTheOldest = function(array) {
    const oldest = array.sort(function(a, b) {
        let lastGuy, nextGuy;

        if (a.yearOfDeath != null) {
            lastGuy = a.yearOfDeath - a.yearOfBirth;
        } else {
            lastGuy = new Date().getFullYear() - a.yearOfBirth;
        }

        if (b.yearOfDeath != null) {
            nextGuy = b.yearOfDeath - b.yearOfBirth;
        } else {
            nextGuy = new Date().getFullYear() - b.yearOfBirth;
        }

        return lastGuy > nextGuy ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
