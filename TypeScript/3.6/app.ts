interface IMovement {

    speed: number;
    Move(): void;

}

interface ICar extends IMovement {

    fill(): void;

}

class Car implements ICar {

    speed: number;
    Move(): void {
        console.log("Едем");
    }

    fill(): void {
        console.log("Идет заправка");
    }
}

let auto = new Car();
auto.Move();
auto.fill();


interface FullNameBuilder {
    (name: string, surname: string): string;
}


let simpleBuilder: FullNameBuilder = (name: string, surname: string): string =>{
    return `Mr ${name} ${surname}`
}

let fullname = simpleBuilder("Tom", "jerryf");
console.log(fullname);

interface StringArray{
    [index: string]: string;
}

let stringArr: StringArray = {}

stringArr["red"] = "#red";
stringArr["yellow"] = "#yellow";

console.log(stringArr);

interface PersonInfo{

    (name: string, surname: string): void;
    fullname:string;
    password: string;
    authenticate(): void;

}

function personBuilder(): PersonInfo {
    
    let person = <PersonInfo> function(name: string, surname: string): void{
        person.fullname = `${name} ${surname}`;
    };

    person.authenticate = function(){
        console.log( `${person.fullname} заходит с паролем ${person.password}` );
    }
    return person

}

let jerry = personBuilder();
jerry("Jerry", "TM")
jerry.password = "Tom";
jerry.authenticate();