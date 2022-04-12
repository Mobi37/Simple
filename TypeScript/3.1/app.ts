class User{

    readonly name: string = "Guest";
    age: number = 0;

    constructor(userName:string, userAge:number){

        this.name = userName;
        this.age = userAge;

    }



    print(){
        console.log( `Имя ${this.name}, Возраст ${this.age}` );
    }

}


let tom: User = new User("Tom", 53);
console.log(tom)
let jerry = new User("Jerry",0);
tom.print();
jerry.print();

class Employee extends User {
    
    company:string;

    constructor(name:string, age:number, company:string){
        super(name, age);
        this.company = company;
    }

    work(): void{
        console.log( `${this.name} Работает в компании ${this.company}` )
    }

    print(): void {
        super.print();
        console.log( `Работает в ${this.company}` );
    }

}

let bob: Employee = new Employee("bob", 11, "TC");
bob.print();
bob.work();