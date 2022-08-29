const fs = require("fs");

setTimeout(() => console.log("timer 1 finished"), 0);
setImmediate(() => console.log("immediate 1 finished"));

fs.readFile("test-file.txt", "utf8", () => {
  console.log("I/O finished");

  setTimeout(() => console.log("timer 2 finished"), 0);
  setImmediate(() => console.log("immediate 2 finished"));
  setTimeout(() => console.log("timer 3 finished"), 3000);

  process.nextTick(() => console.log("process.nextTick finished"));
});
console.log("top level code finished");
