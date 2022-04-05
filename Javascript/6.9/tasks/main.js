//task 2

// function f(x) {
//   console.log(x);
// }

// function delay(func, m) {
  
//   return function(){
//     setTimeout( func.apply(this, arguments ),m )
//   }

// }


// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); 
// f1500("test");

//task 3

// function debounce(f, m) {

//   let cd = false;

//   return function() {
//     if (cd) return;

//     f.apply(this, arguments);

//     cd = true;

//     setTimeout(() => cd = false, m);
//   };

// }

// let f = debounce(console.log, 1000);

// f(1); 
// f(2); 

// setTimeout( () => f(3), 100); 
// setTimeout( () => f(4), 1100); 
// setTimeout( () => f(5), 1500);


//task 4

function f(a) {
  console.log(a)
}


function throttle(func, ms) {
  
  let cd = false;
  let lastThis;
  let lastArguments;

  return function(){


    if(cd){
      lastThis = this;
      lastArguments = arguments
      return
    }
    func.apply(this, arguments);
    
    cd = true;


    setTimeout( () =>{
      if( lastThis ){
        func.apply(lastThis, lastArguments);
        lastThis = null;
        lastArguments = null;
      }
    }, ms)

  }

}

let f1000 = throttle(f, 1000);

f1000(1); 
f1000(2); 
f1000(3); 