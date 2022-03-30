let car_table = document.getElementsByClassName("car_table")[0];
let car_btable = document.getElementsByClassName("car_tbody")[0];
let buttons = document.querySelectorAll("button[value]");
console.log(buttons)
let deletecars = document.getElementsByClassName("js-cars")[0];
let line;
let positionTr;
let storageKey = Object.keys(localStorage);

let car = {
    name: "hg4",
    data: Date("2021"),
    broken: true,
}

localStorage.setItem("4", JSON.stringify(car));


updateTable();

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (eval) => {
        let button = eval.path[0].value;
        switch(button){
            case "removeCar":
                removeCar();
                return;
            case "confirmremove":
                confirmRemove();
                return;
        }
    })
}


// buttons.addEventListener("click", (eval) =>{
//     let button = eval.path[0].value;
//     removeCar();
// })

let buttontable = [ ...car_btable.querySelectorAll("tr")];
for (let i = 1; i < buttontable.length; i++) {
        
    buttontable[i].addEventListener("click", (eval) =>{
        if( positionTr != undefined ){
            buttontable[positionTr].classList.remove("action")
                
        }
        positionTr = buttontable.indexOf(eval.path[1])
        buttontable[positionTr].classList.add("action")
    })

}

// let cellsArray = [ ...car_btable.querySelectorAll('tr') ];
// let listener = e => document.getElementById('output').innerHTML = cellsArray.indexOf(e.target); // Создать элемент вывода надо заранее

// cellsArray.forEach( cell => cell.addEventListener( 'click', listener ) );



// car_table.addEventListener( "click", (eval) => {



//     if(line != undefined){
//         line.classList.remove("action");
//     }
    
//     line = eval.path[1];
//     let count = car_btable.childNodes;
//     console.log(count[0])
//     if(line.tagName == "TR" & line.classList != "table_head"){
//         line.classList.add("action");
//     }else{
//         line = undefined;
//     }
    
// })

function confirmRemove(){
    if( positionTr != undefined ){
        // deletecars.insertAdjacentHTML("afterbegin",buttontable[positionTr])
        //deletecars.innerHTML = HTMLTableElement. ("",buttontable[positionTr]);
        deletecars.innerHTML = buttontable[positionTr];
    }else{
        deletecars.innerText = "Выберите машину которую хотите удалить"
    }
}

function removeCar(){

    if(positionTr != undefined ){
        localStorage.removeItem( String( storageKey[--positionTr] ) )
        positionTr = undefined;
        updateTable();
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
        if( lines_car.item(i).classList == "table_lines" || lines_car.item(i).classList == "table_lines action"){
            lines_car.item(i).remove();
            i--;
        }
    }

    let obj_localstorage = Object.values( localStorage );
    for(i = 0; i < obj_localstorage.length; i++){
        addrow( obj_localstorage[i] );
    }
    storageKey = Object.keys(localStorage);
}