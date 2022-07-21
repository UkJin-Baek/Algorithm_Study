const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input

const solution = (input) => {
  const word = input
  const wordArr = word.split('').map(el => el)
  const dict = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    N: 0,
    M: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  }

  wordArr.map(el => {
    Object.keys(dict).map(item => {
      item === el.toUpperCase() ? dict[`${el.toUpperCase()}`]++ : null
    })
  })
  const result = Object.values(dict).filter((el,idx) => {
    return el === Math.max(...Object.values(dict))
  }) 
  
  console.log(result.length > 1 ? '?' : Object.keys(dict).find(key => dict[key] === result[0]))
}

rl.on("line", function(line) {
  input = line
  rl.close();
}).on("close", function() {
  solution(input)
  process.exit();
});