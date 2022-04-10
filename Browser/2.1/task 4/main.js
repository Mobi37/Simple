let pole = document.getElementById("field");
let ball = document.getElementById("ball");
pole.addEventListener( "click", (event) =>{
  let x = event.clientX;
  let y = event.clientY;

  console.log(x, y)

  ball.style.top = y/2 +"px";
  ball.style.left = x/2 +"px";

} )