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
    function User() {
    }
    return User;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Person.prototype.print = function () {
        console.log(this.name, this.age);
    };
    return Person;
}(User));
var person = new Person("Dave", 65);
person.print();
var People = /** @class */ (function () {
    function People(name, age) {
        this._name = name;
        this._age = this.setYears(age);
    }
    People.prototype.print = function () {
        console.log("\u0418\u043C\u044F: ".concat(this._name, ", \u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F ").concat(this._age));
    };
    People.prototype.setYears = function (age) {
        return new Date().getFullYear() - age;
    };
    return People;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, company) {
        var _this = _super.call(this, name, age) || this;
        _this.company = company;
        return _this;
    }
    Employee.prototype.printEmployee = function () {
        this.print();
        console.log("\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 ".concat(this.company));
    };
    return Employee;
}(People));
var koct = new People("Kost", 11);
koct.print();
var Jerry = new Employee("Jerry", 8, "TC");
Jerry.printEmployee();
var Polsovatel = /** @class */ (function () {
    function Polsovatel(name, age) {
        this.name = name;
        this.age = age;
    }
    Polsovatel.prototype.printUser = function () {
        return "\u041F\u0440\u0438\u0432\u0435\u0442 ".concat(this.name, ", ").concat(this.age, " y.o");
    };
    return Polsovatel;
}());
var polsov = new Polsovatel("JJ", 10);
console.log(polsov.printUser());
