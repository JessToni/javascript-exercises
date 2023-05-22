const convertToCelsius = function(fahrenheit) {
  let convert = (fahrenheit - 32) * (5/9);
  let roundToDecimal = Math.round(convert * 10) / 10;
  return roundToDecimal;
};

const convertToFahrenheit = function(celsius) {
  let convert = (celsius * (9/5)) + 32;
  let roundToDecimal = Math.round(convert * 10) / 10;
  return roundToDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
