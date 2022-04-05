//task 1

let user = {
  name: "Василий Иванович",
  age: 35
};

let userJson = JSON.stringify(user);
let newUser = JSON.parse(userJson);
console.log(userJson);
console.log(newUser);

//task 2

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;


console.log( JSON.stringify(meetup, function replacer(key, value) {
  
  return (key != "" && value == meetup) ? undefined : value

}) );



