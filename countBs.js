function countBs(word) {
  let n = 0;
  for (const i of word) {
    if (i == "B") {
      n += 1;
    }
  }

  return n;
}

console.log(countBs("BaBboon"));
