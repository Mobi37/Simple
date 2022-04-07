

function showNotification(options) {
    
    
    let notification = document.createElement("div");

    notification.classList = "notification";
    notification.classList.add(`${ options.className }`);
    notification.innerText = options.html;
    notification.style.top = options.top + "px";
    notification.style.right = options.right + "px";

    document.body.append(notification);

    setTimeout( () => notification.remove(), 1500 )

}




setInterval( () =>{
    showNotification({
        top: 10, 
        right: 10, 
        html: "Hello!", 
        className: "welcome" 
    })
}, 2000 );




