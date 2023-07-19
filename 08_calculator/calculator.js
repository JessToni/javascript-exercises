const add = function(a, b) {
  if (a === null || a === "") {
    a  = 0;
  } else if (b === null || b === "") {
    b = 0;
  }
  
	let sum = a + b
  return sum
};

const subtract = function(a, b) {
	let difference = a - b
  return difference
};

const sum = function(...numbers) {
	let sum = 0;
  const arr = [];

  //Place all numbers loaded in the function into an array
  for (let number of numbers) {
    arr.push(number);
  }

  /*for (let contents of arr) {

  }*/
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
