//task 1

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salars) {
  let sum = 0;
  Object.values(salars).forEach(element => {
    sum += element;
  });

  return sum;

}

console.log( sumSalaries(salaries) );

//task 2


let user = {
  name: 'John',
  age: 30
};

function count(user) {
  
  return Object.keys(user).length

}

console.log( count(user) ); 
