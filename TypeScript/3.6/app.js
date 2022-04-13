var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.Move = function () {
        console.log("Едем");
    };
    Car.prototype.fill = function () {
        console.log("Идет заправка");
    };
    return Car;
}());
var auto = new Car();
auto.Move();
auto.fill();
var simpleBuilder = function (name, surname) {
    return "Mr ".concat(name, " ").concat(surname);
};
var fullname = simpleBuilder("Tom", "jerryf");
console.log(fullname);
var stringArr = {};
stringArr["red"] = "#red";
stringArr["yellow"] = "#yellow";
console.log(stringArr);
function personBuilder() {
    var person = function (name, surname) {
        person.fullname = "".concat(name, " ").concat(surname);
    };
    person.authenticate = function () {
        console.log("".concat(person.fullname, " \u0437\u0430\u0445\u043E\u0434\u0438\u0442 \u0441 \u043F\u0430\u0440\u043E\u043B\u0435\u043C ").concat(person.password));
    };
    return person;
}
var jerry = personBuilder();
jerry("Jerry", "TM");
jerry.password = "Tom";
jerry.authenticate();
