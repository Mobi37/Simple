function typeValue<T>(test:T): T {
    return test;
}

console.log( typeValue<number>(12) );


class User<T>{

    private _id: T;

    constructor(id: T){
        this._id = id;
    }

    getId(): T{
        return this._id;
    }

}

let userTom = new User<string>("stroka");
let userJerry = new User<number>(9);

console.log( userTom.getId() )
console.log( userJerry.getId() )



interface Named {
    name: string;
    age: number;
}


class NameInfo <T extends Named>{

    printName( obj: T ): void {
        console.log(`Name ${obj.name}`);
    }
    printAge( obj: T ): void {
        console.log(`Age ${obj.age}`);
    }

}

class Person{
    constructor( public name: string, public age: number ) {}
}

let Tom = new Person('Tom', 32);
let NameInformation = new NameInfo<Person>();

NameInformation.printName(Tom);
NameInformation.printAge(Tom);

function UserFactory<T>(type: { new (name: string): T } ): T {
    return new type("Jerry"); 
}


class UserF{
    private _name: string
    constructor(name: string){
        this._name = name;
        console.log(`THW ${this._name}`)
    }

}

let Jerrys: UserF = UserFactory(UserF);
