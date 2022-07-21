const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = ''
let length

const solution = () => {
  const s = ['W', 'H', 'E', 'E']
  let result = []
  const wordArr = input.split('').map(el => el.toUpperCase())

  wordArr.map(el => {
    s.includes(el) ? el : '_'
  })
  console.log('result', result)
}

rl.on("line", function(line) {
  !length ? length = line : input = line
  length && !!input ? rl.close() : null
}).on("close", function() {
  solution()
  process.exit();
});