const {writeFile, writeFileSync} = require("fs");

const newContent = "\nThis is some newer content";

writeFile("hi.txt", newContent, {flag: "a"}, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Content added");
       
});
