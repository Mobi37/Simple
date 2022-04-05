//task 1

// function printNumbers(from, to){
//   if( from > to ){
//     return
//   }else{
//     setTimeout(console.log(from), 1000);
//     return printNumbers( ++from, to )
//   }

// }

// printNumbers(1, 7)


function printNumbers(from, to) {
  
  let timer = setInterval( () => {

    console.log(from);
    if( from == to ){
      clearInterval(timer);
    }
    ++from;

  }, 1000 );

}

printNumbers(1, 7)