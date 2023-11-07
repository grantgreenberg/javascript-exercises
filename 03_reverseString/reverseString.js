const reverseString = function(text) {
    let characterArray = [];
    let textLength = text.length;
    for (let i=0; i<textLength; i++) {
        let char = text.charAt(0);
        characterArray.unshift(char);
        text = text.slice(1);
    }
    return characterArray.join("")
  };

// Do not edit below this line
module.exports = reverseString;
