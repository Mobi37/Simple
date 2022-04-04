//task 1

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let messagesRead = new WeakMap();

messagesRead.set(messages[0])

console.log(messagesRead.has(messages[0]));

//task 2

let messages2 = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let messagesRead2 = new WeakMap();

let now = new Date();
let yyy = now.getFullYear().toString() + ":" + now.getMonth().toString() + ":" + now.getDay().toString() + ":" + now.getHours().toString() + ":" + now.getMinutes().toString();

messagesRead2.set(messages[0], yyy)

console.log(messagesRead2);