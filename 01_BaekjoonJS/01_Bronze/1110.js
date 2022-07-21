const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input

const solution = (input) => {
  let next = input
  const og = input
  let count = 0
  let temp = 0
  
  while(true) {
    let nextArr = next.toString().split('').map(el => parseInt(el))
    nextArr.map(num => {
      temp += num
    })
    next = temp
    let tempArr = temp.toString().split('').map(el => parseInt(el))
    next = nextArr[nextArr.length - 1].toString() + tempArr[tempArr.length - 1].toString()
    temp = 0
    count++
    if (parseInt(og) === parseInt(next)) break
  }

  console.log(count)
}

rl.on("line", function(line) {
  input = line
  rl.close();
}).on("close", function() {
  solution(input)
  process.exit();
});