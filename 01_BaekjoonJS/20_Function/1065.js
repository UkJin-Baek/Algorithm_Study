const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input

const solution = () => {
  let count = 0;
  if(input > 99) {
    for(let i = 100; i <= input; i++) {
      let arr = [...i.toString()];
      let tole = arr[0] - arr[1]
      let check = []
      arr.map((el, idx) => {
        if(idx + 1 < arr.length && arr[idx] - arr[idx+1] === tole) {
          check.push(true)
        } else if(idx + 1 < arr.length && arr[idx] - arr[idx+1] !== tole) check.push(false)
      })
      if(!check.includes(false)) count++;
    }
    console.log(99 + count);
  } else return console.log(input);
}

rl.on("line", function(line) {
  input = line
  rl.close();
}).on("close", function() {
  solution()
  process.exit();
});