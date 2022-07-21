const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input
let count

const check = (value, arr) => {
  const check = arr.map(el => {
    return (value % el) === 0 ? true : false
  })
  return check.includes(false) ? false : true
}

const solution = (count, input) => {
  let max, min
  let tempArr = [...input] 
  let result
  tempArr.map(el => {
    max = Math.max(...tempArr)
    min = Math.min(...tempArr)
    check(max * min, tempArr) ? result = max*min : tempArr.pop(min)
  })

  console.log(result)
}

rl.on("line", function(line) {
  !count ? count = line : input = line.split(' ').map(el => parseInt(el))
    
  count && input ? rl.close() : null
})
rl.on("close", function() {
  solution(count, input)
	process.exit()
})