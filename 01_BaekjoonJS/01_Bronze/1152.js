const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input

const solution = (input) => {
  let sentence = input.split(" ").filter(el => el !== '')
  console.log(sentence.length)
}

rl.on("line", function(line) {
  input = line
  rl.close();
}).on("close", function() {
  solution(input)
  process.exit();
});