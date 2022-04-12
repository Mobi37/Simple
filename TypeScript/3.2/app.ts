abstract class User{

    abstract print(): void;

}

class Person extends User{

    constructor(public name:string, public age:number){
        super()
        
    }

    print(): void {
        console.log( this.name, this.age )
    }

}

let person: User = new Person("Dave", 65)
person.print();



class People{

    protected _name: string;
    private _age: number;

    constructor(name: string, age: number){
        this._name = name;
        this._age = this.setYears(age);
    }

    public print(): void{
        console.log( `Имя: ${this._name}, Дата рождения ${this._age}` )
    }


    private setYears(age: number): number{
        return new Date().getFullYear() - age;
    }

}

class Employee extends People{

    protected company: string;

    constructor( name: string, age: number, company:string ){
        super(name, age);
        this.company = company;
    }

    public printEmployee(): void{
        this.print();
        console.log(`Работает в ${this.company}`);
    }

}


let koct: People = new People("Kost", 11);
koct.print();

let Jerry = new Employee("Jerry", 8, "TC");
Jerry.printEmployee();

class Polsovatel{

    constructor( private name: string, private age: number ){}

    printUser(): string{
        return `Привет ${this.name}, ${this.age} y.o`
    }

}

let polsov = new Polsovatel("JJ", 10);
console.log( polsov.printUser() );
