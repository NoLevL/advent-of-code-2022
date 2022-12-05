const fs = require("fs");

fs.readFile(
  "/Users/jonatanangergard/AOC/code/3dec/input.txt",
  "utf-8",
  (err, text) => {
    if (err) {
      console.log(err);
      console.log(err.message);
      return;
    }
    const data = JSON.stringify(text).replace(/\"/g, "").split("\\n");
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const reduced = data[i].replace("\\r", "");
      const reduced2 = data[i + 1].replace("\\r", "");
      const reduced3 = data[i + 2].replace("\\r", "");

      for (const l of reduced.split("")) {
        if (reduced2.includes(l) && reduced3.includes(l)) {
          sum = sum + pointMap[l];
          break;
        }
      }
      i = i + 2;
    }
    console.log(sum);
  }
);

const pointMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};
