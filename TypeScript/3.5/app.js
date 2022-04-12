var User = /** @class */ (function () {
    function User(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.getFullName = function (surname) {
        return "".concat(this.name, " ").concat(surname);
    };
    return User;
}());
var tom = new User(0, "Tom", 44);
console.log(tom.getFullName("Jerryf"));
