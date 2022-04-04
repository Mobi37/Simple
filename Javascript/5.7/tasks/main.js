//task 1

function unique(arr) {

  return Array.from( new Set(arr) );
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); 


//task 3 

let map = new Map();

map.set("name", "John");

let keys = map.keys();
keys = Array.from(keys);

keys.push("more");