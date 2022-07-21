const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input=[];

const solution = () => {
  const dp = new Array(input + 1).fill(0)
  for (let i=2; i< dp.length; i++) {
    dp[i] = dp[i-1] + 1
    
    if(i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i/3] + 1)
    }
    
    if(i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i/2] + 1)
    }
  }
  console.log(dp)
  console.log(dp[input])
}

rl.on("line", function(line) {
  input = parseInt(line)
  rl.close();
}).on("close", function() {
  solution()
  process.exit();
});