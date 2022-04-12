var Employee = {
    id: 0,
    name: "Tom",
    sayWords: function (words) {
        console.log("".concat(this.name, " say \"").concat(words, "\""));
    }
};
function printUser(user) {
    console.log("id: ".concat(user.id));
    console.log("name ".concat(user.name));
}
function buildUser(userId, userName, userAge) {
    return { id: userId, name: userName, age: userAge };
}
var newPoint = {
    a: 10,
    b: 11
};
printUser(Employee);
var newUser = buildUser(1, "Jerry", 85);
printUser(newUser);
Employee.sayWords("Hello World");
