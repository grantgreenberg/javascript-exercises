const repeatString = function(textToRepeat, numberOfRepeats) {

    i = 0;
    keepGoing = true;
    let returnString = "";

    while (keepGoing) {

        if (numberOfRepeats < 0) {
            return "ERROR";
        }
        else if (i < numberOfRepeats) {
            returnString += textToRepeat;
        }
        else {
            keepGoing = false;
            return returnString;
        }

        i++;

    }
};

// Do not edit below this line
module.exports = repeatString;
