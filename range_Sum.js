function Sum(elements) {
  let result = 0;
  for (const value of elements) {
    result += value;
  }
  return result;
}
function Range(start, end, step = 1) {
  let elements = [];
  if (step === 0) {
    throw new Error("Step cannot be zero");
  }
  if (step > 0) {
    for (start; start <= end + 1; start += step) {
      elements.push(start);
    }
  } else {
    for (start; start >= end + 1; start += step) {
      elements.push(start);
    }
  }

  return elements;
}

let elements = Range(5, 1, -1);
console.log(elements);

let total = Sum(elements);
console.log("The Sum is: " + total);
