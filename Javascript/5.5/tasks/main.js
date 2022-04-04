//task 1

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );

function camelize(TextWithLine) {


  let arrWord = TextWithLine.split("-");
  
  for (let i = 1; i < arrWord.length; i++) {
    arrWord[i] = arrWord[i][0].toUpperCase() + arrWord[i].slice(1);
  }
  return arrWord.join("");
  
}


//task 2

let arr8 = [5, 3, 8, 1];
let filtered = filterRange(arr8, 1, 4);
console.log(filtered);
console.log(arr8);

function filterRange(arr8, a, b) {

  return arr8.filter( (value) => (value >= a && value <= b) );

}

//task 3
let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
console.log(arr2)

function filterRangeInPlace(arr, a, b) {
  
  arr.filter( (value,index) => {
    (value < a || value > b) ? arr.splice( index , 1) : false;    
  } )
}

//task 4


let arr3 = [5, 2, 1, -10, 8, 13, 10];

arr3.sort( (a, b) => a - b ).reverse();

console.log( arr3 );

// task 5

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);
console.log(sorted)
console.log(arr4)

function copySorted(arr) {

  return arr.concat().sort();

}

//task 6

let calc = new Calculator();

console.log( calc.calculate("2 + 3") );
console.log( calc.calculate("2 * 2") );
console.log( calc.calculate("3 / 3") );
console.log( calc.calculate("2 ** 3") );
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);
console.log( calc.calculate("2 * 2") );
console.log( calc.calculate("3 / 3") );
console.log( calc.calculate("2 ** 3") );


function Calculator() {
  
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }

  this.calculate  = ( calcText ) => {

    let temparr =  calcText.split(" ");
    try{
      return this.methods[ temparr[1] ](+temparr[0], +temparr[2]);
    }catch{
      return "Нету такого метода"
    }
    
  }

  this.addMethod = ( iter, func ) =>{
    this.methods[iter] = func;
  }


}

//task 7

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let users = [ vasya3, petya3, masha3 ];

let names = users.map( (value) => value.name )

console.log( names );

// task 8

let vasya4 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya4 = { name: "Петя", surname: "Иванов", id: 2 };
let masha4 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya4, petya4, masha4 ];

let usersMapped = users2.map( (value) => {
  return{
    fullName: value.name + " " + value.surname,
    id: value.id,
  }
  
} )
console.log(usersMapped)

//task 9

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr6 = [ vasya, petya, masha ];

console.log( sortByAge(arr6) );

function sortByAge(array) {
  
  return array.sort( (a, b) => a.age - b.age )

}

//task 11

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 29 };

let arr = [ vasya2, petya2, masha2 ];

console.log( getAverageAge(arr) );

function getAverageAge(array) {

  return array.reduce( (prev, user) => prev + user.age ,0 ) / array.length;

  
}

//task 12

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );

function unique(arr) {

  let uniqueArr = [];
  arr.forEach((value, index) => {
    uniqueArr.includes(value) ? false : uniqueArr.push(value);
  });
  return uniqueArr;
}