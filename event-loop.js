const fs = require("fs");
setTimeout(() => console.log("timer 1 finished"), 0);
setImmediate(() => console.log("immediate 1 finished"));

fs.readFile("test-file.txt", "utf8", () => {
  console.log("I/O finished");
});
console.log("top level code finished");
