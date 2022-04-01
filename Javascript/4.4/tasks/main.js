//task 3

let calculator = {

    a: null,
    b: null,

  read(){
    this.a = +prompt("Введите первое число", 0);
    this.b = +prompt("Введите второе число", 0);
  },

  sum(){
    return (this.a + this.b);
  },

  mul(){
    return (this.a * this.b)
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



//task 4 

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();