// let x = 45;

// 45 + "2" //concatination operator ==452


// console.log(``);

// let firstWord = "Banana";
// let secondWord = "bandana";

// console.log(`Banana is less than bandana: ${firstWord.toLowerCase() < secondWord.toLowerCase()}`);


// console.log(`5 is greater than 4: ${5 > 4}`);
// console.log(`apple is greater than appear: ${'apple' > 'appear'}`);
// console.log(`Went is greater than west: ${'west' < 'Went'}`);
// console.log(`2 is greater than "12": ${2 > '12'}`);
// console.log(`undefined == null: ${undefined == null}`);
// console.log(`undefined === null ${undefined === null}`);
// console.log(`null == "0": ${null == '0'}`);

// if (false == false) {
//     console.log(`it was equal`);
// }


// let T = true

// if (T == true) {
//     console.log(`its true!`);
// }

// if (T == false) {
//     console.log(`its false!`);

// }

// if (T) console.log(`it was true`);
// if ("") console.log(`this is false`);


// if (T) {
//     console.log(`it was true`);
// } else {
//     console.log(`it was false`);
// }

// let question1 = prompt("Is minecraft better than fortnight (Yes or No)")
// let question2 = prompt("What is 93 + 7")
// let question3 = prompt("What was the answer to the first question")
// let question4 = prompt("What is 33 - 3 + 5")
// let question5 = prompt("Just write 'no' ")

// let userGrade = 0

// if(question1.toLowerCase() == 'yes'){
//     userGrade += 1
// }

// if(question2 == 100){
//     userGrade += 1
// }

// if(question3.toLowerCase() == 'yes'){
//     userGrade += 1
// }

// if(question4 == 35){
//     userGrade += 1
// }

// if(question5.toLowerCase() == 'no'){
//     userGrade += 1
// }

// console.log(`You got a grade of ${userGrade}/5`);


// if(name = "Pam"){
//     console.log(`cool`);

// }else{
//     console.log(`not so cool`);

// }

// let coolness = (name  = "Pam") ? "cool" : "not so cool";
// console.log(coolness);


// let result = (a + b < 4) ? "Below" : "Over";

// let message;
// let login = "Director";

// switch (login) {
//     case "Employee":
//         message = 'Hello';
//         break;
//     case 'Director':
//         message = 'Greetings';
//         break;
//     case '':
//         message = 'No login';
//         break;
//     default:
//         message = '';
//         break;
// }

// console.log(message);


// if (employee == true) {
//     if (name == "Karry") {
//         if (computer == "personal") {

//         } else if (computer == "work"){

//         }

//     }
// }

// let time = 14;
// let weekdays = false;

// if(weekdays == false || time < 9 || time < 17){
//     open = false;
// } else{
//     open = true;
// }

// console.log(open);



// let flatTire = false;
// let engineLight = false;
// let milesDriven = 3145;
// if(flatTire == true || engineLight == true || milesDriven > 30000){
//     console.log(`Fix car`);

// }else{
//     console.log(`Car is fine`);

// }

// let pen = true
// let paper = false
// let mouse = true
// let keyboard = true

// if((pen && paper) || (mouse && keyboard)){
//     console.log(`You're good to go!`);

// }else{
//     console.log(`You forgot something`);

// }

// let upLate = true;
// let manyGames = true;
// let breakfastSkipped = true;
// if(!upLate && !manyGames && !breakfastSkipped){
//     console.log(`pass test`);

// }


// for(let i = 0; i <= 5; i++){
//     console.log(`${i*2 + 5}`);

// }

// for(i = 5; i <= 11; i++){
//     console.log(`${i}`);

// }

// for(i = 0; i <= 9; i++){
//     console.log(`This is nice`);

// }

// for(i = 11; i >= 1; i -= 2){
//     console.log(`${i}`);

// }

// let number
// let string = ``
// for(i = 0; i > 5; i++){

//     number += Math.floor(Math.random() * 101) * i
//     console.log(i);

//     string += `${i}, `
// }
// console.log(string);



// let sum = 0;
// let amount = 0;

// while(true) {
//     let value = +prompt(`Enter a test score`, `Leave blank if done`);
//     if (!value) break;
//     sum += value;
//     amount++;
// }

// let average = sum / amount;
// let grade = ""
// if (average >= 90){
//     grade = "A"
// }else if(average >= 80){
//     grade = "B"
// }else if(average >= 80){
//     grade = "C"
// }else if(average >= 80){
//     grade = "D"
// }else{
//     grade = "F"
// }

// console.log(`Sum: ${sum}`);
// console.log(`Amount: ${amount}`);
// console.log(`Average: ${average}`);
// console.log(`Grade: ${grade}`);

// let numbers = []

// for(let i = 0; i < 5; i++){
//     numbers += `${Math.floor(Math.random()* 101)}, `
// }
// console.log(numbers);

// main:
// for(let i = 0; i < 50; i++){
//     if(i % 2 == 1) continue main;
//     console.log(i);
// }


// let i, j;

// loopOuter:
// for(i = 0; i<3; i++){
//     loopInner:
//     for(j = 0; j<3; j++){
//         if(i == j){
//             continue loopOuter
//         }else{
//             console.log(`i = ${i}, j = ${j}`);
//         }
//     }
// }

// let number = 0

// for(i = 0; i <= 1000; i++){
//     number += i
// }
// console.log(number);


// let number = 1

// for(i = 93; i <= 845; i++){
//     if(i % 2 == 1){
//         number += i
//     }
// }
// console.log(number);

// let number = 1
// for(i = 1; i <= 400; i++){
//     if(i % 6 == 0){
//         number *= i
//     }
// }
// console.log(number);


// let input = 101;

// for(i = 2; i < input; i++)
//     if(input % i == 0){
//         console.log(`Not prime`);
//         break;
//     }else if(i == (input - 1)){
//         console.log(`Is prime`);

//     }


// let numbers = '';
// for (let val = 1; val < 100; val++) {
//     if (val == 1) {
//         numbers += '1, ';
//         continue;
//     } else if (val == 2) {
//         numbers += '2, '
//     }

//     for (i = 2; i < val; i++) {


//         if (val % i == 0) {
//             break;
//         } else {
//             numbers += `${val}, `
//             break;
//         }
//     }
// }

// console.log(numbers)

// let input = 3
// let number = 1

// for(i = 1; i <= input; i++){
//     number *= i
// } 

// console.log(number)

// let gcf = 0
// let num1 = 18
// let num2 = 24

// for (i = 0; i <= num1; i++) {
//     if (num1 % i == 0) {
//         if (num2 % i == 0) {
//             gcf = i

//         }

//     }
// }
// console.log(gcf)


// let input = 5
// let string = ''

// for(i = 1; i <= input; i++){
//     string += '*'
//     console.log(string)
//     if(i == input){
//         for(j = i - 2; j >= 0; --j){
//             string = string.slice(0, -1)
//             console.log(string)
//         }
//     }
// }


// let number1 = 0
// let number2 = 1
// let input = 10
// let temp = 0
// let string = "0, 1, "
// for(i = 1; i <= input - 2; i++){
//     string += (number1 + number2) + ", "

//     temp = number1 + number2;
//     number1 = number2;
//     number2 = temp;
// }

// console.log(`${string}`)

// let input = 5
// let number = 0
// let answer = 0
// for(i = 0; i <= input; i++){
//     number += i
//     console.log(number);

//     answer += number
// }
// console.log(answer);



// let input = 8;
// let line = "";
// let num = 0;

// for(let n = 0; n <= input; n++){

//     for(let i = 0; i <= input; i++){
//         num = Math.abs(i - n)
//         line += num + " "
//     }
//     console.log(line);
//     line = ""
    
// }




// let box1 = [1, 3, 6, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]
// let box2 = [2, 3, 6, 7, 10, 11, 13, 15, 18, 19, 22, 23, 26, 27, 30, 31]
// let box3 = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21 ,22, 23, 28, 29, 30, 31]
// let box4 = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31]
// let box5 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

// let input = 19
// let output =[0, 0, 0, 0, 0]
// for(let i of box1){
//     if(input == i){
//         output[4] = 1
//     }
// }
// for(let i of box2){
//     if(input == i){
//         output[3] = 1
//     }
// }
// for(let i of box3){
//     if(input == i){
//         output[2] = 1
//     }
// }
// for(let i of box4){
//     if(input == i){
//         output[1] = 1
//     }
// }
// for(let i of box5){
//     if(input == i){
//         output[0] = 1
//     }
// }
// console.log(`${output[4] output[3] output[2] output[1] output[0]}`);


// let arr = ["jazz", "blues"]

// arr.push("R&B")

// if(arr.length % 2 == 0){

// }else{
//     arr[Math.floor(arr.length/2)] = "classic"
    
// }
// arr.unshift("rap", "acapella")

// console.log(arr);



// let test = ["yes", "no", "maybe", "sure", "nope",]

//!Functions


// function calcMath (){
// 	let number = Math.round(Math.random()* 100);
// 	let output = number * 4 + 13;
// 	console.log(`number: ${number}`);
// 	console.log(`output: ${output}`)
// }

// function power (){
// 	let number = Math.round(Math.random()* 100);
// 	let output = number ** 2;
// 	console.log(`number: ${number}`);
// 	console.log(`output: ${output}`)
// }

// function square (){
// 	let number = Math.round(Math.random() * 100)
// 	if(Number.isInteger(Math.sqrt(number))){
// 		do{
// 			number = Math.round(Math.random() * 100);
// 		}while(Number.isInteger(Math.sqrt(number) == false));
// 		}
// 	console.log(number)
// }

// function slope (){
// 	let arr = ['As I see it, yes.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don’t count on it.', 'It is certain.', 'It is decidedly so.', 'Most likely.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Outlook good.', 'Reply hazy, try again.', 'Signs point to yes.', 'Very doubtful.', 'Without a doubt.', 'Yes.', 'Yes – definitely.', 'You may rely on it.']

// 	console.log(`Should you do something idk random things aha ha? ${arr[Math.floor(Math.random() * 20)]}`)
// }

// function createConsonants (word){
// 	word = word.replace("a", "")
// 	word = word.replace("e", "")
// 	word = word.replace("i", "")
// 	word = word.replace("o", "")
// 	word = word.replace("u", "")
// 	return word
// }
// console.log(createConsonants('super'))


// function shortOnly(string){
// 	string = string.replace(".", "")
// 	let arr = string.split(" ")
// 	let output = ""
// 	for(i = 0; i < arr.length; i++){
// 		if(arr[i].length > 4){

// 		}else{
// 			output += `${arr[i]} `
// 		}
// 	}
// 	return output
// }

// console.log(shortOnly('Mollit veniam commodo dolor irure nost officia in nostrud laborum ad sunt.'))


