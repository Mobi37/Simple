var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (n) {
            if (n < 0 || n > 110) {
                console.log("Вас еще/уже нету");
            }
            else {
                this._age = n;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return "haha ".concat(this._name);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var ivl = new User("larry", 5);
console.log(ivl.age);
ivl.age = 6;
console.log(ivl.age);
console.log(ivl.name);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.calculateYears = function (age) {
        return Person.retirementAge - age;
    };
    Person.retirementAge = 65;
    return Person;
}());
var tom = new Person("Tom", 36);
var years = Person.calculateYears(36);
console.log(Person.retirementAge);
console.log("\u0414\u043E \u043F\u0435\u043D\u0441\u0438\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ".concat(years, " \u043B\u0435\u0442"));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
var yearg = Employee.calculateYears(36);
console.log(Employee.retirementAge);
console.log("\u0414\u043E \u043F\u0435\u043D\u0441\u0438\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ".concat(yearg, " \u043B\u0435\u0442"));
