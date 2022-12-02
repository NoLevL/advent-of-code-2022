const fs = require("fs");

fs.readFile(
  "/Users/jonatanangergard/AOC/code/2dec/input.txt",
  "utf-8",
  (err, text) => {
    if (err) {
      console.log("error");
      return;
    }
    const data = JSON.stringify(text).replace(/\"/g, "").split("\\n");
    const map = {
      ax: 4,
      ay: 8,
      az: 3,
      bx: 1,
      by: 5,
      bz: 9,
      cx: 7,
      cy: 2,
      cz: 6,
    };
    let points = 0;
    for (const play of data) {
      const num = play.replace(" ", "").toLowerCase();
      points = points + map[num];
    }
    console.log(points);
  }
);
