let modal = document.getElementById("modal");

document.onkeydown = (eval) => {
    if( eval.key == "Escape" ){
        modal.checked = false;
    }
}

    modal.addEventListener("change", () =>{
        if(this.modal.checked == true){
            document.getElementsByClassName("modal_headText")[0].innerHTML = message;
            document.getElementsByClassName("modal_inputText")[0].focus();
        }
    })

function showPrompt(message, value){
    let inputText = document.getElementsByClassName("modal_inputText")[0];

    if( inputText.value == "" ){
        inputText.value = "null";
    }
    value(inputText.value);
    inputText.value = "";
}

modal.addEventListener("change", () =>{
    if(this.modal.checked == false ){
        showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
            alert("Вы Ввели: " + value);
        });
    }
})

