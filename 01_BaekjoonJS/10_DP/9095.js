const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = []
let caseCount = 0

const doDP = (n) => {
  let dp = [1, 2, 4]
  if (n > 3) {
    for(let i = 3; i < n; i++) {
      dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }
  }
  console.log(dp[n-1])
}

const solution = () => {
  for(let i = 0; i < input.length; i++) {
    doDP(input[i])
  }
}

rl.on("line", function(line) {
  !caseCount ? caseCount = parseInt(line) : input.push(line)
  if(input.length === caseCount) rl.close()
}).on("close", function() {
  solution()
  process.exit();
});