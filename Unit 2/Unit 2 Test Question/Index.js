let userNumber = Number(prompt("What is your number?"))

let inputSign = "negative"
if(userNumber >= 0){
    inputSign = "possitive"
}

console.log(`The data type of the number you input is "${typeof(userNumber)}" and the sign is ${inputSign}. Your number multiplied by four is ${userNumber * 4}`)