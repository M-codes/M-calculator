const add = function(...extras) {
	let total = 0;
  for(let i = 0; i < extras.length; i++){
    total += extras[i];
  }
  return total;
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

const multiply = function(list) {
  let total = 1;
  for(let i = 0;i<list.length;i++){
    total *= list[i];
  }
  return total;
};

const divide = function(a,b){
    let ans = a / b;
    return ans;
};

