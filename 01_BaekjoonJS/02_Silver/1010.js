//실패

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = []
let caseCount = 0
let count = 0

const solution = (input) => {
  const [west, east] = input
  const startNum = east - west + 1
  let temp = startNum
  let count = 1
  result = 1
  while(true) {
    if(count === startNum) break
    
    result += temp

    if(temp > 0) temp--
    if(temp === 0) {
      count++
      temp = startNum - count
    }
  }
  console.log(west, east, result)

}

rl.on("line", function(line) {
  !caseCount ? caseCount = line : input = (line.split(' ').map(el => parseInt(el)))
  !(input.length > 0) ? null : caseCount > count++ ? solution(input) : rl.close()
  if(caseCount && count >= caseCount) rl.close()
}).on("close", function() {
  process.exit();
});