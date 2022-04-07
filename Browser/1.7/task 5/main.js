let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
};
let container = document.getElementsByClassName('container')[0];

function createTree(obj) {

    if ( Object.keys(obj).length = 0 ) return

    let ul = document.createElement("ul")

    for( key in obj ){
        let li = document.createElement("li");
        li.innerText = key;
        let check = createTree( obj[key] );
        if( check ){
            
            li.append( check )
        }

        ul.append(li);
    }

    return ul
    
}

container.append( createTree(data) );