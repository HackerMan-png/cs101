//!THIS IS THE FIRST ONE

// let string = "((()"
// let west = 0;
// let east = 0;
// let direction = "";
// let arr = string.split("")


// for(i of arr){
// 	if(i == "("){
// 		west += 1
// 	}else if(i == ")"){
// 		east += 1
// 	}
// }

// if(west > east){
// 	direction = "west"
// }else if(east > west){
// 	direction = "east"
// }else if(west == east){
// 	direction = "same location"
// }
// console.log(`The train is ${Math.abs(west - east)} stations to the ${direction}`)



//!THIS IS THE BUMP ONE

// let string = "((()"
// let west = 0;
// let east = 0;
// let direction = "";
// string = string.replace("((", "")
// string = string.replace("))", "")
// let arr = string.split("")


// for(i of arr){
// 	if(i == "("){
// 		west += 1
// 	}else if(i == ")"){
// 		east += 1
// 	}
// }

// if(west > east){
// 	direction = "west"
// }else if(east > west){
// 	direction = "east"
// }else if(west == east){
// 	direction = "same location"
// }
// console.log(`The train is ${Math.abs(west - east)} stations to the ${direction}`)


//!WEST BRIDGE BROKEN ONE

// let string = "()()())()()()()()()()()()()()())(()()()()()()()"
// let west = 0;
// let east = 0;
// let direction = "";
// let arr = string.split("")


// for(i of arr){
// 	if(i == "(" && east > west){
// 		west += 1
// 	}else if(i == ")"){
// 		east += 1
// 	}
// }

// if(west > east){
// 	direction = "west"
// }else if(east > west){
// 	direction = "east"
// }else if(west == east){
// 	direction = "same location"
// }
// console.log(`The train is ${Math.abs(west - east)} stations to the ${direction}`)


//!BRAINDEAD

// let string = "()()()()()()()()()()()()";
// let west = 0;
// let east = 0;
// let direction = "";
// let arr = string.match(/.{1,4}/g);
// let temp = 0


// for (i of arr) {
// 	let value = 0;
// 	let binary = [0, 0, 0];
// 	let splitArr = arr[temp].split("")
// 	if (splitArr[0] == "(") {
// 		console.log(splitArr)
// 		if (splitArr[1] == "(") {
// 			binary[0] = 1
// 		}
// 		if (splitArr[2] == "(") {
// 			binary[1] = 1
// 		}
// 		if (splitArr[3] == "(") {
// 			binary[2] = 1
// 		}
// 		if (binary[0] == 1) {
// 			value += 4
// 		}
// 		if (binary[1] == 1) {
// 			value += 2
// 		}
// 		if (binary[2] == 1) {
// 			value += 1
// 		}
// 		west += value
// 	} else if (splitArr[0] == ")") {
// 		console.log(splitArr)
// 		if (splitArr[1] == "(") {
// 			binary[0] = 1
// 		}
// 		if (splitArr[2] == "(") {
// 			binary[1] = 1
// 		}
// 		if (splitArr[3] == "(") {
// 			binary[2] = 1
// 		}
// 		if (binary[0] == 1) {
// 			value += 4
// 		}
// 		if (binary[1] == 1) {
// 			value += 2
// 		}
// 		if (binary[2] == 1) {
// 			value += 1
// 		}
// 		east += value
// 	}
// temp += 1
// console.log(value)
// console.log(binary)
// }

// if(west > east){
// 	direction = "west"
// }else if(east > west){
// 	direction = "east"
// }else if(west == east){
// 	direction = "same location"
// }

// console.log(`The train is ${Math.abs(west - east)} stations to the ${direction}`)


