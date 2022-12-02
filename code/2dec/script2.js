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
      ax: 3,
      ay: 4,
      az: 8,
      bx: 1,
      by: 5,
      bz: 9,
      cx: 2,
      cy: 6,
      cz: 7,
    };
    let points = 0;
    for (const play of data) {
      const num = play.replace(" ", "").toLowerCase();
      points = points + map[num];
    }
    console.log(points);
  }
);
