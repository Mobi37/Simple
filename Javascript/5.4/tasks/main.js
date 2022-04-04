//task 2
let styles = ["Джаз", "Блюз"];

console.log(styles)

styles.push("Рок-н-ролл");

console.log(styles)

arrayMiddleReplace("Классика")
console.log(styles)

console.log(styles.shift());
console.log(styles)

styles.unshift("Рэп", "Регги");
console.log(styles);


function arrayMiddleReplace( middleText ) {

  styles[parseInt( styles.length / 2 )] = middleText; 
  
}


//task 4
let countUserInput = [];
let count = 0;
let inputUser;

console.log( sumInput() );

function sumInput() {
  
  do{
    
    inputUser = +prompt("Введите число",0);
    countUserInput.push(inputUser);
    

  }while( inputUser != null && inputUser != "" && !(isNaN(inputUser)) )

  countUserInput.forEach(element => {
    count += element;
  });
  return count;
}

