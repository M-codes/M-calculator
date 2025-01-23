let fisrtNumber;
let operator;
let secondNumber;

// const add = function(...extras) {
// 	let total = 0;
//   for(let i = 0; i < extras.length; i++){
//     total += extras[i];
//   }
//   return total;
// };
const display = document.getElementById("display");

// Append value to the display
function appendValue(value) {
    display.value += value;
}

const add = function(a,b){
    let ans = a + b;
    return ans;
};

const subtract = function(a,b) {
	let ans = a-b;
  return ans;
};

const sum = function(list) {
	let total = 0;
  for(let i = 0;i<list.length;i++){
    total += list[i];
  }
  return total;
};

// const multiply = function(list) {
//   let total = 1;
//   for(let i = 0;i<list.length;i++){
//     total *= list[i];
//   }
//   return total;
// };

const multiply = function(a,b){
    let ans = a * b;
    return ans;
};

const divide = function(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
};
const operate = function(op,a,b){
    if (op == "+"){
        return add(a,b);
    } else if (op == "-"){
        return subtract(a,b);
    } else if (op == "*"){
        return multiply(a,b);
    } else if (op == "/"){
        return divide(a,b);
    } else {
        return "Invalid operator";
    }
};
