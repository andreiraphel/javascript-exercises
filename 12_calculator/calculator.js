const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(...values) {
  let flat = values.flat();
	let return_value = 0;
  for(const value of flat){
    return_value += value;
  }
  return return_value;
};

const multiply = function(...values) {
  let flat = values.flat();
  let return_value = 1;
  for(const value of flat){
    return_value *= value;
  }
  return return_value;
};

const power = function(x, y) {
  let total = x;
	for(let i = 1; i < y; i++){
    total *= x;
  }
  return total;
};

const factorial = function(x) {
  if(x == 0) return 1;
	if(x == 1) return 1;
  return (x  * factorial(x - 1));
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
