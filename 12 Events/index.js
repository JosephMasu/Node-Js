import EventEmitter from "events";

//  Creating Instance
const customEmitter = new EventEmitter();

// We have two useful objects, in that object
// 1. on 👉 listen/register for an event
// 2. emit 👉 emit/call an event

customEmitter.on("response", (name, id) => {
  console.log(`user: ${name} with: ${id}`);
});

customEmitter.on("response", () => {
  console.log("some other logic here");
});

customEmitter.emit("response", "john", 34);
customEmitter.emit("response", "masu", 25);
customEmitter.emit("response", "maza", 22);
customEmitter.emit("response", "gaga", 20);
customEmitter.emit("response", "bella", 45);



