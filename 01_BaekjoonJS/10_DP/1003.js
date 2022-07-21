const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = []
let caseCount = 0


const fb = (n) => {
  if(n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else {
    return fb(n-1) + fb(n-2)
  }
}

const solution = () => {
  for (let i = 0; i < input.length; i++) {
    let oneCount = 0, zeroCount = 1;
    
    for (let j = 1; j <= input[i]; j++) {
        const tmpCount = zeroCount;
       
        zeroCount = oneCount;
        oneCount = tmpCount + oneCount;
    }

    console.log(zeroCount + " " + oneCount);   
}
}

rl.on("line", function(line) {
  !caseCount ? caseCount = parseInt(line) : input.push(line)
  if(input.length === caseCount) rl.close()
}).on("close", function() {
  solution()
  process.exit();
});