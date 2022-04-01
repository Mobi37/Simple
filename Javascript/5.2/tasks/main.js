//task 1 

let a = +prompt("Первое число", 0);
let b = +prompt("Второе число", 0);
console.log( a + b );


//task 2

function readNumber() {
  let number;
  do{
    number = prompt("Введите число ");
  }while( !isFinite(number) )

  if( number == "" || number == null ) return null
  return +number;
}

console.log(readNumber());

//task 3

function random(min, max){

  return min + Math.random() * (max - min)

}

console.log( random(1, 5) );

function randomInteger(minint, maxint){

  return minint + parseInt(Math.random() * maxint );

}

console.log( randomInteger(1, 5) );
