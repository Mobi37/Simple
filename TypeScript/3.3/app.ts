class User{

    constructor( private _name: string, private _age: number ){}

    public get age(): number{
        return this._age;
    }

    public set age(n: number){
        if( n < 0 || n > 110 ){
            console.log("Вас еще/уже нету");
        }else{
            this._age = n;
        }
    }
    public get name(): string{
        return `haha ${this._name}`;
    }

}

let ivl = new User("larry", 5);

console.log(ivl.age);
ivl.age = 6;
console.log(ivl.age);
console.log( ivl.name )


class Person {
  
    age: number;
    name: string;
     
    static retirementAge: number = 65;
    static calculateYears(age: number): number{
         
        return Person.retirementAge - age;
    }
     
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let tom = new Person("Tom", 36);
let years = Person.calculateYears(36);
console.log(Person.retirementAge);
console.log(`До пенсии осталось: ${years} лет`);

class Employee extends Person {}

let yearg = Employee.calculateYears(36);
console.log(Employee.retirementAge);
console.log(`До пенсии осталось: ${yearg} лет`);

