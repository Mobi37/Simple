var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.feed = function () {
        console.log("Кормим животное");
    };
    return Animal;
}());
var Movable = /** @class */ (function () {
    function Movable() {
        this.speed = 0;
    }
    Movable.prototype.move = function () {
        console.log("\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0435\u043C\u0441\u044F \u0441\u043E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E ".concat(this.speed));
    };
    return Movable;
}());
var Horse = /** @class */ (function () {
    function Horse(name) {
        this._name = name;
    }
    return Horse;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(Horse, [Animal, Movable]);
var pony = new Horse("Pony");
pony.speed = 10;
pony.move();
pony.feed();
console.log(pony);
