let principal = Number(prompt("What is the starting amount?"))
let rate = Number(prompt("What is the rate in percent"))
let time = Number(prompt("What is the time in years"))

let amount = principal * (1 + (rate/100)*time )

console.log(`The final amount will be $${amount.toFixed(2)}`)