//task 1

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

console.log( name );
console.log( age );
console.log( isAdmin ); 


//task 2

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( topSalary(salaries) );

function topSalary(salaries) {
    
  return Object.entries(salaries).reduce( (prevValue, value, index) =>{
    if( prevValue[1] < value[1] ){
      return value;
    }
    return prevValue;
  }, [0,0] )

}


