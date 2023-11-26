const fibonacci = function(input) {
    if (input < 0) {
        return 'OOPS';
    }
    else {
        return fib(input);
    }
};

function fib(num) {
    let fibArray = [];
    let n1 = 0, n2 = 1, nextTerm;
    nextTerm = n1 + n2;
    fibArray.push(nextTerm);


    for (let i = 1; i <= parseInt(num); i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        fibArray.push(nextTerm);
    }

    return parseInt(fibArray.splice(num-1, 1).join(''));
};

// Do not edit below this line
module.exports = fibonacci;
