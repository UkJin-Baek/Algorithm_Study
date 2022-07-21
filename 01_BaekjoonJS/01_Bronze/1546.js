const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count, input

const solution = () => {
  const scores = input.split(' ').map(el => parseInt(el))
  const max = Math.max(...scores)
  const newScores = scores.map(el => {
    return parseFloat(el/max*100)
  })
  let sum = 0
  newScores.map(el => {
    sum += el
  })
  let result = parseFloat(sum/newScores.length)
  console.log(result)
}

rl.on("line", function(line) {
  !count ? count = line : input = line
  count && input ? rl.close() : null;
}).on("close", function() {
  solution()
  process.exit();
});