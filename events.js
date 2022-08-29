const EventEmiter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("newsale", () => {
  console.log("Newsale received");
});
myEmitter.on("newsale", () => {
  console.log("consumer name: Daphney");
});

myEmitter.on("newsale", (stock) => {
  console.log(`there are new ${stock} items left on stock`);
});

myEmitter.emit("newsale", 10);
