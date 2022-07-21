let deSelfNumbers = []
let selfNumbers = Array(10000).fill(true)

const getSelfNumbers = () => {
  let n = 0;
  while (n < 10000) {
    n++;
    let arr = [...n.toString()];
    let deSelfNumber = n;
    arr.map(el => {
      deSelfNumber += parseInt(el)
    });
    selfNumbers[deSelfNumber] = false
  }
}

const solution = () => {
  getSelfNumbers()
  selfNumbers.map((el, idx) => {
    if(el && idx > 0) console.log(idx)
  })
}

solution();
process.exit();
