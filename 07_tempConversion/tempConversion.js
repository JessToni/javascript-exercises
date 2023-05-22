const convertToCelsius = function(fahrenheit) {
  let convert = (fahrenheit - 32) * (5/9);
  return convert;
};

const convertToFahrenheit = function(celsius) {
  let convert = (celsius * (9/5)) + 32;
  return convert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
