//task 4

function sum(a) {
  
  return function(b){
    return a + b
  }

}

console.log( sum(1)(2) );

//task 5


function inBetween(a, b) {
  
  return function(c){
    return c >= a && c <= b;
  }

}
function inArray(arrays) {
  
  return function(c){
    return arrays.includes(c);
  }

}

let arr = [1, 2, 3, 4, 5, 6, 7];


console.log( arr.filter(inBetween(3, 6)) );

console.log( arr.filter(inArray([1, 2, 10])) );

//task 6 

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];


function byField(field) {
  
  return function(x,c){
    return x[field] > c[field] ? 1 : -1;
  }

}

console.log( users.sort(byField("age")) );
