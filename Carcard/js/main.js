let car_btable = document.getElementsByClassName("car_tbody")[0];
let buttons = document.querySelectorAll("button[value]");
let deletecars = document.getElementsByClassName("js-cars")[0];
let positionTr;
let storageKey = Object.keys(localStorage);
let buttontable = [ ...car_btable.querySelectorAll("tr")];
let newcars;
let reworkcars;


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
            case "addCar":
                addCar();
                return;
            case "changeconfirm":
                changeconfirm();
                return;
            case "changeCar":
                changeCar();
                return;
                
        }
    })
}


function confirmRemove(){
    if( positionTr != undefined ){
        deletecars.innerText ="";

        let contentDelete = JSON.parse( localStorage.getItem( String( storageKey[positionTr-1] ) ) ) ;
        let keydelete = Object.keys(contentDelete);
        let valuedelete = Object.values(contentDelete);
        let table = document.createElement("table");
        table.classList.add("delete_value","car_table");
        let tr = document.createElement("tr");
        let tr2 = document.createElement("tr");

        for (let i = 0; i < keydelete.length; i++) {
            
            let td = document.createElement("td");
            td.appendChild( document.createTextNode( keydelete[i] ) )
            td.classList.add("td-border");
            tr.appendChild(td)
            
            let td2 = document.createElement("td");
            td2.classList.add("td-border");
            td2.appendChild( document.createTextNode( valuedelete[i] ) )
            tr2.appendChild(td2)
            
        }

        table.appendChild(tr)
        table.appendChild(tr2)
        deletecars.appendChild(table)

    }else{
        deletecars.innerText = "Выберите машину которую хотите удалить"
    }
}

function removeCar(){
    if(positionTr != undefined ){
        localStorage.removeItem( String( storageKey[--positionTr] ) )
        updateTable();
    }
    
}

function addCar(){
    newcars = document.getElementsByClassName("js-newcars")
    let car = {
        name: String(newcars[0].value),
        data: newcars[1].value.slice(0,4),
        broken: Boolean(newcars[2].checked), 
        price: Number(newcars[3].value)
    }
    for (let i = 0; i < newcars.length; i++) {
        newcars[[i]].value = "";
        
    }
    if(storageKey.length == 0){
        localStorage.setItem( "0" , JSON.stringify(car) );
    }else{
        localStorage.setItem( String( Number(storageKey[(storageKey.sort()).length-1])+1 ) , JSON.stringify(car) );
    }
    
    updateTable();
}

function changeconfirm(){
    reworkcars = document.getElementsByClassName("js-reworkcars")
    if(positionTr !=0 & positionTr != undefined){
        let remorkcarinfo = Object.values( JSON.parse( localStorage.getItem(storageKey[positionTr-1])));
        for (let i = 0; i < reworkcars.length; i+=3) {
            reworkcars[i].value = remorkcarinfo[i]
        }
        reworkcars[1].value = remorkcarinfo[1]+"-01-01";
        reworkcars[2].checked = Boolean(remorkcarinfo[2]);
    }else{
        alert("Выберите машину")
    }


}

function changeCar(){
    let changeCars = {
        name: String(reworkcars[0].value),
        data: reworkcars[1].value.slice(0,4),
        broken: Boolean(reworkcars[2].checked), 
        price: Number(reworkcars[3].value)
    }
    if(positionTr !=0 & positionTr != undefined){
        localStorage.setItem( String(storageKey[positionTr-1]), JSON.stringify(changeCars))
    }

    
    updateTable();
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

function buttonAction(){
    for (let i = 1; i < buttontable.length; i++) {
        
        buttontable[i].addEventListener("click", (eval) =>{
            if( positionTr != undefined  & buttontable[positionTr] != undefined ){
                buttontable[positionTr].classList.remove("action")
                    
            }

            positionTr = buttontable.indexOf(eval.path[1])
            buttontable[positionTr].classList.add("action")
        })

    }
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
    buttontable = [ ...car_btable.querySelectorAll("tr")];
    buttonAction();
}