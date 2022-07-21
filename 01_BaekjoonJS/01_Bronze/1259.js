const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input

const solution = (input) => {
  const wordArr = input.split('')
  const temp = [...wordArr]
  const reverseArr = temp.reverse()
  wordArr.join('') === reverseArr.join('') ? console.log('yes') : console.log('no')
}

rl.on("line", function(line) {
  input = line
  input == 0 ? rl.close() : solution(input)
}).on("close", function() {
  process.exit()
  
});
