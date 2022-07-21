const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input

const solution = () => {
  const [A, B] = input.split(' ')
  let result = ''
  result = parseInt(A) > parseInt(B) ? '>' : parseInt(A) < parseInt(B) ? '<' : '=='
  console.log(result)
}

rl.on("line", function(line) {
  input = line
  rl.close()
}).on("close", function() {
  solution()
  process.exit();
});