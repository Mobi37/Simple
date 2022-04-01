//task 2
function Calculator() {
  
  this.read = () => {
    this.a = +prompt("Введите первое число", 0);
    this.b = +prompt("Введите второе число", 0);
  }

  this.sum = () =>{
    return this.a + this.b;
  }

  this.mul = () => {
    return this.a * this.b;
  }

}
 

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//task 3


function Accumulator(startingValue){
  this.value = startingValue;
  this.read = () => {
    this.value += (+prompt("Сколько добавить", 0));
  }
}

let accumulator = new Accumulator(1); // начальное значение 1


accumulator.read();
accumulator.read(); 

alert(accumulator.value);
