const add = function(number1, number2) {
	return parseInt(number1) + parseInt(number2);
};

const subtract = function(number1, number2) {
	return parseInt(number1) - parseInt(number2);
};

const sum = function(array) {
  let total = 0;
	array.forEach(element => {
    total += parseInt(element);
  });
  return total;
};


const multiply = function(array) {
  let total = 1;
	array.forEach(element => {
    total *= parseInt(element);
  });
  return total;
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
  total = 1;
  if (number == 0) {
    return 1;
  }
  else {
    for (let i=1;i<=number;i++) {
      total *= i;
    }
  };
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
