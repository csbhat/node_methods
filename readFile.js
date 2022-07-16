const fs = require("fs");

let content = "";
fs.readFile("hi.txt", "utf8", (err, data) => {

  
  if (err) {
    console.error(err);
  }
  console.log(data);
});



console.log("Log from outside");
