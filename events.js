const EventEmiter = require("events");

class sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new sales();

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
