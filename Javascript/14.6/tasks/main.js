let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort( (a, b) =>{
    return collator.compare(a, b);
} )

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК