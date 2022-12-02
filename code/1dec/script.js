const fs = require("fs");

fs.readFile(
  "/Users/jonatanangergard/AOC/code/1dec/input.txt",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log("error");
      return;
    }
    const dataList = JSON.stringify(data).split("\\n\\n");
    const cutData = [];
    for (const d of dataList) {
      cutData.push(d.split("\\n"));
    }
    let highest = 0;
    let current = 0;
    for (const list of cutData) {
      for (let i = 0; i < list.length; i++) {
        const num = +list[i];
        current = current + num;
        if (current > highest) highest = current;
        console.log(current);
        if (i === list.length - 1) current = 0;
      }
    }
    console.log(highest);
  }
);
