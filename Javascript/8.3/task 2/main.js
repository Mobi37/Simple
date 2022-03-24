function f(a, b) {
  console.log( a + b );
}

Function.prototype.defer = function(ms){
  let temp = this;
  return function(...args){
    setTimeout( () => temp.apply(this, args) ,ms);
  }
};

f.defer(1000)(1, 2);