//task 1


function* pseudoRandom(firstParam) {
  let result = firstParam;
  while(true){
    result = result * 16807 % 2147483647;
    yield result;
  }

}


let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073