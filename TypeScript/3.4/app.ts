interface IUser {
    id: number;
    name: string;
    age?: number;
    sayWords?(words: string):void;
}

interface Point{
    readonly a: Number;
    readonly b: Number;
}

let Employee: IUser = {
    id: 0,
    name:"Tom",

    sayWords: function(words: string): void{
        console.log(`${this.name} say "${words}"`);
    }
}

function printUser(user: IUser) {

    console.log(`id: ${user.id}`);
    console.log(`name ${user.name}`)
    
}

function buildUser( userId: number, userName: string, userAge?: number): IUser {
    
    return { id: userId, name: userName, age: userAge };

}

let newPoint: Point = {
    a: 10,
    b: 11,
}

printUser(Employee)

let newUser = buildUser(1, "Jerry", 85);
printUser(newUser);

Employee.sayWords("Hello World")