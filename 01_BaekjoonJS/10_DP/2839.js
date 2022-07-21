const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input
let count = 0;

const solution = () => {
  while(input > 0) {
    if (input % 5 === 0) {
      input -= 5
      count++
    }

    else if (input % 3 === 0) {
      input -= 3
      count ++
    }

    else if (input > 5) {
      input -= 5
      count ++
    }
    else {
      count = -1
      break
    }
  }
  return console.log(count);
}

rl.on("line", function(line) {
  input = line
  rl.close();
}).on("close", function() {
  solution()
  process.exit();
});