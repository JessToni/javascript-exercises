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

const sum = function(arr) {
  const initialValue = 0;

  //Adds all the contents of arr
	const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sumWithInitial;
};

const multiply = function(arr) {
  const initialValue = 1;

  //Multiplies all of the contents of arr
  const productWithInitial = arr.reduce (
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue
  )

  return productWithInitial;
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
  let factorial = 1;
	if (num === 0) {
    return 1;

  } else {
    for (let i = 1; i <= num; i++) {
      factorial = factorial * i;
    }

    return factorial;
  }
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
