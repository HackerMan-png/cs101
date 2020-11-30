"use strict";

let currentNumber = Math.floor(Math.random() * 100)
document.getElementById("currentNumber").textContent = currentNumber
let streak = 0
let bestStreak = 0

function gtlt(higherLower){
	if(higherLower == "Higher"){
		let temp = currentNumber
		gen()
		if(temp < currentNumber){
			streak++
			document.getElementById("currentStreak").textContent = `Current Streak = ${streak}`
		}else{
			if(streak > bestStreak){
				bestStreak = streak
				document.getElementById("bestStreak").textContent = `Best Streak = ${bestStreak}`
			}
			streak = 0
			document.getElementById("currentStreak").textContent = `Current Streak = ${streak}`
		}
	}
	if(higherLower == "Lower"){
		let temp = currentNumber
		gen()
		if(temp > currentNumber){
			streak++
			document.getElementById("currentStreak").textContent = `Current Streak = ${streak}`
		}else{
			if(streak > bestStreak){
				bestStreak = streak
				document.getElementById("bestStreak").textContent = `Best Streak = ${bestStreak}`
			}
			streak = 0
			document.getElementById("currentStreak").textContent = `Current Streak = ${streak}`
		}
	}
}


function gen(){
	currentNumber = Math.floor(Math.random() * 100)
	document.getElementById("currentNumber").textContent = currentNumber
}

document.getElementById("currentNumber").textContent = currentNumber
