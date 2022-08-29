const EventEmitter = require("events");
const http = require("http");

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
//////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request ");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
