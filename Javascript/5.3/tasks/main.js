//task 1 

function ucFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log( ucFirst("давпп") );

//task 2

function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes("viagra") || str.includes("xxx");
}


console.log( checkSpam('buy ViAgRa now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );

//task 3

function truncate(str, maxlength){

if( str.length > maxlength ){
  str = str.slice(0, --maxlength);
  return str + (str[20] = "..." )
}
return str;

}

console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );

//task 4

function extractCurrencyValue(valuta){
  
  return  +valuta.slice(1);

}

console.log(extractCurrencyValue('$120'))