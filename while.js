const names = ["shaun", "mario", "luigi"];

let i = 0;
while (i < names.length) {
  console.log("While loop", names[i]);
  i++;
}
for (i of names) {
  console.log("for of loop", i);
}

for (let index = 0; index < names.length; index++) {
  console.log("for loop", names[index]);
}

let a = 5;
do {
  console.log("val of a is: ", a);
  a++;
} while (a < 5);
