let value = document.querySelector("input[name=money]").value;
let years = document.querySelector("select[name=months]").value / 12;
let interest = document.querySelector( "input[name=interest]" ).value * 0.01;
let prev = document.getElementsByClassName("prev_value")[0];
let newvalue = document.getElementsByClassName("new_value")[0];
let lisen = document.querySelector("form[name=calculator]");
let result = Math.round(value * (1 + interest) ** years);

lisen.addEventListener("change", () =>{
  value = document.querySelector("input[name=money]").value;
  years = document.querySelector("select[name=months]").value / 12;
  interest = document.querySelector( "input[name=interest]" ).value * 0.01;
  console.log(value, years, interest)
  result = Math.round(value * (1 + interest) ** years);
  prev.innerHTML = value;
  newvalue.innerHTML = result;


})

  prev.innerHTML = value;
  newvalue.innerHTML = result;


