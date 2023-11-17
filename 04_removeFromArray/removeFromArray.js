const removeFromArray = function() {
    let len = arguments.length;
    let arr = arguments[0];

    for (let i=1;i<len;i++) {
        if (arr.indexOf(arguments[i]) >= 0) {
            let pos = arr.indexOf(arguments[i]);
            arr.splice(pos, 1);
        } else { continue; }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
