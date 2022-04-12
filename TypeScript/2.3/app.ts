type Operation = ( t:number) => number;

function sum(a:number, op: Operation ):number {

    return a + op(2);

}

function test(h:number):number {
    return h + 1;
}

let g: (x:number, y:Operation)=> number;
g = sum;
console.log(g(4, test ));


console.log( sum( 4, () => 4 + 5 ) )


let header = <HTMLElement> document.getElementById("header") as HTMLElement;
// header!.innerHTML = "1"; 

type obj = { name:string, age?:number};
type sityOnj = obj & { sity:{ town:string, adress:string } }

let lvupPeson:sityOnj ={
    name: "Name",
    age: 43,
    sity: {
        town: "Town",
        adress: "adress"
    }
}

let person:obj = {
    name: "Кист",
    age: 11
}

console.log(person)
console.log(lvupPeson)


let massive: readonly number[] = [ 1, 2, 3, 4, 5 ]
// massive[0] = 0;


let cortej: [string,number];
cortej = [ "name", 54 ];
for (let prop of cortej) {
    console.log(prop)
}


let mes: number[] = [1, 2, 3, 5, 6];

console.log( sum2(...mes) );

function sum2(...numbers: number[]):number {
    let count:number;

    return numbers.reduce((prev, value ):number =>{
        return prev += value;
    }, 0)
}


enum season { 
    Winter = "Зима", 
    Spring = "Весна",
    Summer = "Лето", 
    Autumn = "Осень"
}


let currentSeason: season = season.Summer;
console.log(currentSeason);
seasonInfo(currentSeason);
seasonInfo(season.Winter)

function seasonInfo(current:season) {
    
    switch (current) {
        case season.Winter:
        case season.Spring:
        case season.Autumn:
            console.log(`Сейчас не ${season.Summer}`)
            break;
    
        case season.Summer:
            console.log(`Сейчас ${current}`)
            break;    

    }

}