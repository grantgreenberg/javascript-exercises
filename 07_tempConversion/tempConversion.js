const convertToCelsius = function() {
  let degF = (arguments[0]-32)*(5/9);
  return Math.round(degF * 10) / 10;
};

const convertToFahrenheit = function() {
  let degC = (arguments[0]*(9/5))+32;
  return Math.round(degC * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
