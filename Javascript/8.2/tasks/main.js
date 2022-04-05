//task 2

function Phrase(phrase){
  this.phrase = phrase;
}

let user = new Phrase("greed");
let obj2 = new user.constructor("isgood");
console.log(obj2);
