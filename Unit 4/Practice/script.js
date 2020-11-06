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


// let input = 5
// let number = 1

// for(i = 1; i <= input; i++){
//     number *= i
// } 

// console.log(number)

























// let input = 5
// let stringThingy = ""

// for (i = 0; i <= input; i++) {
//     stringThingy += '*'
//     console.log(stringThingy)

//     if (i == input) {
//         for (i = 5; i = 0; i--) {
//             stringThingy -= '*'
//             console.log(stringThingy)
//         }
//     }
// }

// let number = 0
// let number2 = 1
// let input = 10
// let string = ""



// console.log(string)

// let val = 100
// let prime;

// for(i = 2; i < val; i++) {
//     if(val % i == 0) {
//         prime = false;
//         break;
//     } else {
//         continue;
//     }
// }

// if(prime == false) {
//     console.log('Not prime');
// } else {
//     console.log('Prime');
// }

// let numbers = [];
// for(let val = 1; val < 100; val++){
//     if(val == 1){
//         numbers += '1, ';
//         continue;
//     }else if(val == 2){
//         numbers += '2, '
//     }

//     for (i = 2; i < val; i++){
//         if(val % i == 0) {
//             break;
//         } else{
//             numbers += `${val}, `
//             break;
//         }
//     }
// }

// console.log(numbers)

// let number = 0
// let number2 = 1
// let input = 20
// let string = ""
// for(i = 1; i <= input; i++){
//     string += `${number}, ${number2}, `
//     number += number2
//     number2 += number

// }

// console.log(`${string}`)


// let input = 5
// let number = 1

// for(i = 1; i <= input; i++){
//     number *= i
// } 

// console.log(number)

// let gcf = ""
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


// let input = 10
// let string = ''

// for(i = 1; i <= input; i++){
//     string += '*'
//     console.log(string)
// }



