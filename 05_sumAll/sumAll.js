const sumAll = function() {
    let sum = 0;
    if(arguments[0] >= 0 && typeof arguments[0] === "number" 
    && arguments[1] >= 0 && typeof arguments[1] === "number" ) {
        if (arguments[0] < arguments[1]) {
            for (let i=arguments[0];i<=arguments[1];i++) {
                sum += i;
            }
            return sum;
        }
        else {
            for (let i=arguments[1];i<=arguments[0];i++) {
                sum += i;
            }
            return sum;
        }
    }
    else {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;
