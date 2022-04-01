
//task 4

for (let i = 1; i <= 10; i++) {
    if(!(i % 2) ){
        console.log(i);
    }
}

//task 5

for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

let i = 0;
while(i < 3){
    console.log( `numberwhile ${i}!` );
    i++;
}

//task 6

let number;
console.log(number)

do{
    number = prompt("Введите число",0)
    console.log(number);
}while(number <= 100 && number)

//task 7

let endnumber;

endnumber= prompt("Введите до какого числа определять простые числа",0);
let prostienumber = [];
for (let i = 2; i <= endnumber; i++) {
    let temp = 0
    for (let j = 2; j < i; j++) {
        
        if(i % j == 0 &  i != j){
           ++temp;
        }
        
    }
    if(temp == 0){
        prostienumber.push(i)
    }
    
}

console.log(prostienumber);