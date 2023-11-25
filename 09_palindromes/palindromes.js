const palindromes = function (text) {

    let arr = text.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase().split('');
    let arrCopy = arr.map((x) => x)
    let reversedArr = arrCopy.reverse();

    return arr.join('') === reversedArr.join('');
};

// Do not edit below this line
module.exports = palindromes;
