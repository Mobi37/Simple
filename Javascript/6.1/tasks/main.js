//task 1

function sumTocia(iter) {
  let count = 0;
  for (let i = 1; i <= iter; i++) {
    count += i;
  }
  return count;
}

function sumToRecur(CurrentNumber) {
  if( CurrentNumber == 1 ){
    return CurrentNumber;
  }else{
    return CurrentNumber + sumToRecur( CurrentNumber - 1 );
    
  }

}

console.log(sumTocia(100));
console.log(sumToRecur(100));

//task 2

function factorial(params) {
  if( params == 1 ){
    return params;
  }else{
    return params * (factorial(params - 1));
  }

}

console.log(factorial(4));


