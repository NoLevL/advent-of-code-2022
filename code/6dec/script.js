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
    let num = 0;
    for (let i = 4; i < data.length; i++) {
      const sub = data.substring(i - 4, i);
      if (uniqueChars(sub)) {
        num = i;
        break;
      }
    }
    console.log(num);
  }
);

function uniqueChars(input) {
  for (let i = 0; i < input.length; i++)
    for (let j = i + 1; j < input.length; j++)
      if (input[i] == input[j]) return false;

  return true;
}
