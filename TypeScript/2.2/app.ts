let x: number = 10;
let age: number = 14.1;
let hello: string = "hello";
let isValid: boolean = true;
let isAlive: boolean = false;
const num2: bigint = 100n;


// Разные системы счисления

let decimial: number = 6;
let hex: number = 0xf00d;
let bunary: number = 0b1010;
let octal: number = 0o744;

console.log(decimial, hex, bunary, octal);


let someVar: any = "hello";
console.log(someVar);   
someVar = 20; 
console.log(someVar);

let firstName: string = "Коксик";
let surname: string = "Kiks";
let ageUser: number = 10;
let position: string = "Good bye world"
let helloUser: string = `Имя ${firstName} Фамилия ${surname} Возраст ${ageUser} взгляд на мир ${position}`;

console.log(helloUser);

console.log(isValid, isAlive);
console.log(x, age);
console.log(num2);

