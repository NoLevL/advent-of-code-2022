const fs = require("fs");

fs.readFile(
  "/Users/jonatanangergard/AOC/code/6dec/input.txt",
  "utf-8",
  (err, text) => {
    if (err) {
      console.log(err);
      console.log(err.message);
      return;
    }
    const data = JSON.stringify(text).replace(/\"/g, "");
    for (let i = 4; i < data.length; i++) {
      const sub = data.substring(i - 4, i);
      const unique = [...new Set(sub)];
      if (sub.length === unique.length) {
        console.log(i);
        break;
      }
    }
    console.log(i);
  }
);
