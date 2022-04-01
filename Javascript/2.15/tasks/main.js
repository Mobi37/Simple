
//task 2

console.log(checkAge(19));

function confirm(message){
    console.log(message)
}


function checkAge(age){
    return (age > 18) ? true : confirm("Родители разрешили?");
}

//task 3

function min(minNumberFirst,minNumberSecond ){
    return ( minNumberFirst > minNumberSecond ) ? minNumberSecond : minNumberFirst;
}

console.log( min(3, -1) ); 

//task 4

function pow(number, degree){
    let count = number;
    for (let i = 1; i < degree; i++) {
        
        count *= number;

    }

    return count;
}

console.log( pow( 3, 4 ) )
