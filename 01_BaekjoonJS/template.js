const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input

const solution = () => {

  console.log(input)
}

rl.on("line", function(line) {
  input = line
  rl.close();
}).on("close", function() {
  solution()
  process.exit();
});