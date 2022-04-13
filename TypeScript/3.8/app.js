function typeValue(test) {
    return test;
}
console.log(typeValue(12));
var User = /** @class */ (function () {
    function User(id) {
        this._id = id;
    }
    User.prototype.getId = function () {
        return this._id;
    };
    return User;
}());
var userTom = new User("stroka");
var userJerry = new User(9);
console.log(userTom.getId());
console.log(userJerry.getId());
var NameInfo = /** @class */ (function () {
    function NameInfo() {
    }
    NameInfo.prototype.printName = function (obj) {
        console.log("Name ".concat(obj.name));
    };
    NameInfo.prototype.printAge = function (obj) {
        console.log("Age ".concat(obj.age));
    };
    return NameInfo;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Tom = new Person('Tom', 32);
var NameInformation = new NameInfo();
NameInformation.printName(Tom);
NameInformation.printAge(Tom);
function UserFactory(type) {
    return new type("Jerry");
}
var UserF = /** @class */ (function () {
    function UserF(name) {
        this._name = name;
        console.log("THW ".concat(this._name));
    }
    return UserF;
}());
var Jerrys = UserFactory(UserF);
