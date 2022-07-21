const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = []
let caseCount = 0

const compute = (p) => {
  let temp = p
  let result = 0

  while(temp > 0) {
    result += temp--
  }

  return result
}

const solution = (input) => {
  const [start, end] = input
  let distance = end - start
  let flag = false
  let site = [1]
  let k = 1
  let rest = distance - site.reduce((a, b) => a + b, 0)

  while(rest > 1 && k > 0) {
    rest = distance - site.reduce((a, b) => a + b, 0)
    if((k+1)*(k+1) > distance) flag = true

    if(flag === false && (k+1)*(k+1) <= distance) site.push(++k)
    else if(compute(k) < rest + 1) site.push(k)
    else site.push(--k)
  }
  console.log(site.length)
}

rl.on("line", function(line) {
  !caseCount ? caseCount = parseInt(line) : input.push(line.split(' ').map(el => parseInt(el)))
  if(input.length === caseCount) rl.close()
}).on("close", function() {
  input.map(el => {
    solution(el)
  })
  process.exit();
});