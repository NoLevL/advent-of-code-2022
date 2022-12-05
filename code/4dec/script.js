const fs = require("fs");

fs.readFile(
  "/Users/jonatanangergard/AOC/code/4dec/input.txt",
  "utf-8",
  (err, text) => {
    if (err) {
      console.log(err);
      console.log(err.message);
      return;
    }
    const data = JSON.stringify(text).replace(/\"/g, "").split("\\n");
    let i = 0;
    for (const s of data) {
      const split = s.split(",");
      const nums1 = split[0].split("-");
      const nums2 = split[1].split("-");
      if (+nums1[0] >= +nums2[0] && +nums1[1] <= +nums2[1]) {
        console.log(nums1[0], nums2[0], +nums1[0] >= +nums2[0]);
        i++;
      } else if (+nums2[0] >= +nums1[0] && +nums2[1] <= +nums1[1]) i++;
    }
    console.log(i);
  }
);
