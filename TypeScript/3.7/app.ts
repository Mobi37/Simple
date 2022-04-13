interface IPerson {
    name: string;
}
class Person {
  
    name: string;
    constructor(userName: string) {
  
        this.name = userName;
    }
}
  
class Employee extends Person {
  
    company: string;
    constructor(userName: string, company: string) {
  
        super(userName);
        this.company = company;
    }
}
function printPerson(user: IPerson): void {
    console.log(`IPerson ${user.name}`);
}
let tom: IPerson = new Employee("Tom", "TCC");

let jerry: Person = new Employee("Jerry", "TCC");
let newJerry: Employee = <Employee> jerry;
console.log((<Employee>jerry).company)

console.log( tom instanceof Person )
printPerson(tom);