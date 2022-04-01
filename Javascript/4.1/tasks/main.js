//task 1
let user = {}

user.name = "John";
user.surname = "Smith";
user.name = "Pete"
delete user.name;
console.log(user)

//task 2
let schedule = {};

function isEmpty(object){
    return ( Object.keys(object).length == 0 ) ? true : false;
}

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) );

//task 4

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let countSalar = 0;
for( let key in salaries ){
  countSalar += Number( salaries[key] );
}

console.log(countSalar);

//task 5

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(object){

    for( let key in object ){
      if( typeof( object[key]) == "number" ){
        object[key] *= 2;
      }
    }
}

multiplyNumeric(menu);

// после вызова функции
console.log(menu)