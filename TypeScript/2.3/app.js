function sum(a, op) {
    return a + op(2);
}
function test(h) {
    return h + 1;
}
var g;
g = sum;
console.log(g(4, test));
console.log(sum(4, function () { return 4 + 5; }));
var header = document.getElementById("header");
var lvupPeson = {
    name: "Name",
    age: 43,
    sity: {
        town: "Town",
        adress: "adress"
    }
};
var person = {
    name: "Кист",
    age: 11
};
console.log(person);
console.log(lvupPeson);
var massive = [1, 2, 3, 4, 5];
// massive[0] = 0;
var cortej;
cortej = ["name", 54];
for (var _i = 0, cortej_1 = cortej; _i < cortej_1.length; _i++) {
    var prop = cortej_1[_i];
    console.log(prop);
}
var mes = [1, 2, 3, 5, 6];
console.log(sum2.apply(void 0, mes));
function sum2() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var count;
    return numbers.reduce(function (prev, value) {
        return prev += value;
    }, 0);
}
var season;
(function (season) {
    season["Winter"] = "\u0417\u0438\u043C\u0430";
    season["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    season["Summer"] = "\u041B\u0435\u0442\u043E";
    season["Autumn"] = "\u041E\u0441\u0435\u043D\u044C";
})(season || (season = {}));
var currentSeason = season.Summer;
console.log(currentSeason);
seasonInfo(currentSeason);
seasonInfo(season.Winter);
function seasonInfo(current) {
    switch (current) {
        case season.Winter:
        case season.Spring:
        case season.Autumn:
            console.log("\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0435 ".concat(season.Summer));
            break;
        case season.Summer:
            console.log("\u0421\u0435\u0439\u0447\u0430\u0441 ".concat(current));
            break;
    }
}
