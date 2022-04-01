
//task 6
let age, agecontr;
age = 21
agecontr = ( age >= 18 & age <= 90 );
console.log(agecontr);


//task 7

if( age >= 18 & age <= 90 ){
    
}
if( !(age >= 18 & age <= 90) ){

}

//task 8

let login,password;

login = prompt("Введите логин");
if( login == "admin" ){
    password = prompt("Введите пароль")
    if(password == "123"){
        alert("welcome")
    }else{
        alert("неверный пароль")
    }

}else {
    alert("Я вас не знаю")
}