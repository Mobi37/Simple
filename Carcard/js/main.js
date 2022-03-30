let car_table = document.getElementsByClassName("car_table")[0];
let car_btable = document.getElementsByClassName("car_tbody")[0];
let buttons = document.getElementsByClassName("btn_table")[0];
let deletecars = document.getElementsByClassName("js-cars")[0];
let line;

let car = {
    name: "hg",
    data: Date("2021"),
    broken: true,
}

updateTable();

buttons.addEventListener("click", (eval) =>{
    let button = eval.path[0].value;
    console.log(button)
    removeCar(line);
})

car_table.addEventListener( "click", (eval) => {



    if(line != undefined){
        line.classList.remove("action");
    }
    
    line = eval.path[1];
    let count = car_btable.childNodes;
    console.log(count[0])
    if(line.tagName == "TR"){
        line.classList.add("action");
    }else{
        line = undefined;
    }
    
})

function removeCar(line){

    try{
        console.log(car_btable)
        console.log(line);
        
    }catch{
        
        deletecars.innerHTML = "Выберите машину которую хотите удалить";
    }
    
}

function addCar(){
    console.log("add")
}

function changeCar(){
    console.log("change")
}

function addrow(obj){

    let tr = document.createElement("tr");
    tr.classList.add("table_lines")
    let car_info = JSON.parse(obj);
    for( j = 0; j < Object.keys(car_info).length; j++  ){
        let td = document.createElement("td");
        td.appendChild( document.createTextNode( Object.values(car_info)[j] ) );
        tr.appendChild(td);
    }

    car_btable.appendChild(tr);
}


function updateTable(){

    let lines_car = car_btable.childNodes;
    for(i = 0; i < lines_car.length; i++){
        if( lines_car.item(i).classList == "table_lines" ){
            lines_car.item(i).remove();
            i--;
        }
    }
    
    let obj_localstorage = Object.values( localStorage );
    for(i = 0; i < obj_localstorage.length; i++){
        addrow( obj_localstorage[i] );
    }
}