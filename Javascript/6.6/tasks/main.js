//task 1

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (newValue) => {
    count = newValue;
  }

  counter.decrease = () =>{
    --count;
  }

  return counter;
}

let counter = makeCounter();

console.log( counter() ); 
console.log( counter() ); 

counter.set(10); 

console.log( counter() ); 

counter.decrease(); 

console.log( counter() ); 

