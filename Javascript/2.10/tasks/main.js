
//task 1
let jsname;
let usernumber;
jsname = prompt("Какое официальное название JavaScript?");

if(jsname == "ECMAScript" || jsname == "ecmascript"){
    alert("Верно");
}else{
    alert("Не знаете? ECMAScript!");
}
//task 2
usernumber = prompt("Введите число");

if(usernumber > 0){
    alert("1")
}else if(usernumber < 0){
    alert("-1")
}else{
    alert("0")
}
//task 3

let result, a, b;
a = 1;
b = 1;

result = a + b < 4 ? "мало": "много";
console.log(result)

//task 4 

let message,login;
login = "";

message = (login == "Сотрудник") ? "привет" : 
    (login == "Директор") ? "Здравствуйте" :
    (login == "") ? "Нет логина" : "";

console.log(message);
