const fs = require("fs");

fs.readFile(
  "/Users/jonatanangergard/AOC/code/5dec/input.txt",
  "utf-8",
  (err, text) => {
    if (err) {
      console.log(err);
      console.log(err.message);
      return;
    }
    const data = JSON.stringify(text).replace(/\"/g, "").split("\\n");
    const moves = [];
    for (const line of data) {
      const cut = line
        .replace("move ", "")
        .replace(" from ", ",")
        .replace(" to ", ",")
        .split(",");
      moves.push(cut);
    }
    const stack = stacks;
    for (const move of moves) {
      const from = +move[1];
      const to = +move[2];
      const num = +move[0];
      for (let i = 0; i < num; i++) {
        const slice = stack[from].pop();
        stack[to].push(slice);
      }
    }
    console.log(stack);
  }
);

const stacks = {
  1: ["N", "C", "R", "T", "M", "Z", "P"],
  2: ["D", "N", "T", "S", "B", "Z"],
  3: ["M", "H", "Q", "R", "F", "C", "T", "G"],
  4: ["G", "R", "Z"],
  5: ["Z", "N", "R", "H"],
  6: ["F", "H", "S", "W", "P", "Z", "L", "D"],
  7: ["W", "D", "Z", "R", "C", "G", "M"],
  8: ["S", "J", "F", "L", "H", "W", "Z", "Q"],
  9: ["S", "Q", "P", "W", "N"],
};
