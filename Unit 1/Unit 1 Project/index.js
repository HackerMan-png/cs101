console.log("Hello World")

console.log(3 + 5);

console.log(2 + "2");

console.log(2 - "2");

alert("YOUR COMPUTER WAS SCANNED AND YOU HAVED 4 VIRUSES")
alert("Warning! CALL(853) 555 - 2397 to remove them")

//confirm()
// a way to check yes or no from a user
// the options are returned as true or false
var check = confirm("Do you want to learn how to code")

if(check == true){
    console.log("They are in the right class")
}else{
    console.log("They are in the wrong class")
}

var score = 0
var firstAnswer = prompt("What coding language are you using right now")
var secondAnswer = confirm("Are you in the right class?")
var thirdAnswer = confirm("True or False: 73 + 12 = 85")
var fourthAnswer = prompt("100 + 25 = ?")
var fifthAnswer = confirm("Do you know the difference between Minecraft and Terraria?")
var sixthAnswer = prompt("What is your favorite color?(Purple is the best answer anything else at the risk of losing score)")
var seventhAnswer = confirm("Is minecraft better than fortnite?")
var eighthAnswser = prompt("What is our instructor's name?")
var ninthAnswer = confirm("Do you like coding?")
var tenthAnswer = confirm("Do you follow social distancing guidelines?")

if(firstAnswer == "JavaScript"){
    score ++;
}

if(secondAnswer == true){
    score ++;
}

if(thirdAnswer == true){
    score ++;
}

if(fourthAnswer == "125"){
    score ++;
}

if(fifthAnswer == true){
    score ++;
}

if(sixthAnswer == "Purple", "purple"){
    score ++;
}

if(seventhAnswer == true){
    score ++;
}

if(eighthAnswser == "Kyle Peck", "Mr. Peck"){
    score ++;
}

if(ninthAnswer == true){
    score ++;
}

if(tenthAnswer == true){
    score ++;
}
alert("Look behind you!")

console.log(score);