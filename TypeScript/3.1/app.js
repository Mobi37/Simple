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
    function User(userName, userAge) {
        this.name = "Guest";
        this.age = 0;
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.print = function () {
        console.log("\u0418\u043C\u044F ".concat(this.name, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442 ").concat(this.age));
    };
    return User;
}());
var tom = new User("Tom", 53);
console.log(tom);
var jerry = new User("Jerry", 0);
tom.print();
jerry.print();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, company) {
        var _this = _super.call(this, name, age) || this;
        _this.company = company;
        return _this;
    }
    Employee.prototype.work = function () {
        console.log("".concat(this.name, " \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ").concat(this.company));
    };
    Employee.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 ".concat(this.company));
    };
    return Employee;
}(User));
var bob = new Employee("bob", 11, "TC");
bob.print();
bob.work();
