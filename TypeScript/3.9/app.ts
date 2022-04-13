class Animal {

    feed():void {
        console.log("Кормим животное");
    }
}
  
class Movable {
  
    speed: number=0;
    move(): void {
        console.log(`Перемещаемся со скоростью ${this.speed}`);
    }
}
  
class Horse {
    private _name: string
    constructor(name: string){
        this._name = name;
    }
}

 
interface Horse extends Animal, Movable {}


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
  
applyMixins(Horse, [Animal, Movable]);

let pony: Horse = new Horse("Pony");

pony.speed = 10;
pony.move();
pony.feed();
console.log(pony);