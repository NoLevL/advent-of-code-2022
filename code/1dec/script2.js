const fs = require("fs");

fs.readFile(
  "/Users/jonatanangergard/AOC/code/1dec/input2.txt",
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
    let current = 0;
    const totals = [];
    for (const list of cutData) {
      for (let i = 0; i < list.length; i++) {
        const num = +list[i];
        current = current + num;

        if (i === list.length - 1) {
          totals.push(current);
          current = 0;
        }
      }
    }
    totals.sort(function (a, b) {
      return a - b;
    });
    console.log(totals[256] + totals[258] + totals[257]);
  }
);
