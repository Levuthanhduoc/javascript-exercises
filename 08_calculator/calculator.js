const add = function() {
  a = Number(arguments[0]);
  b = Number(arguments[1]);
	return a + b;
};

const subtract = function() {
	a = Number(arguments[0]);
  b = Number(arguments[1]);
	return a - b;
};

const sum = function() {
	arr = arguments[0];
	return arr.reduce((total,item)=> total + item,0);
};

const multiply = function() {
  arr = arguments[0];
	return arr.reduce((total,item)=> total * item);
};

const power = function() {
	a = Number(arguments[0]);
  b = Number(arguments[1]);
	return a ** b;
};

const factorial = function() {
  let factor = 1;
	for(let i = arguments[0]; i > 0; i--){
    factor *= i;
  }
  return factor;
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
