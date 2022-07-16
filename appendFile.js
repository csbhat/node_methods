const {appendFile} = require("fs");

const newContent = "\nThis is some newer content using appendFile function";

appendFile("hi.txt", newContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Content added");
       
});
