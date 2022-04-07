let array = [1, 2, 3];

array = new Proxy(array, {
  get(targert, prop, receiver){
    if(prop < 0 ){
      prop = Number(prop) + targert.length;
    }
    return Reflect.get(...arguments);
  }
});
console.log( array[-1] ); // 3
console.log( array[-2] ); // 2