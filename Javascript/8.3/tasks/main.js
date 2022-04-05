//task 1

function f() {
  console.log("Hello!");
}

Function.prototype.defer = function(ms){

  setTimeout( () => this.apply(this),ms );

}

f.defer(1000);


//task 2

// function f(a, b) {
//   console.log( a + b );
// }

// Function.prototype.defer = function(ms){
//   let temp = this;
//   return function(...args){
//     setTimeout( () => temp.apply(this, args) ,ms);
//   }
// };

// f.defer(1000)(1, 2);