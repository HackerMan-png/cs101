let radius = Number(prompt("What is the radius of the cylinder in inches?"));
let height = Number(prompt("What is the height of the cylinder in feet?"));

let volume = Math.round((Math.PI * (radius ** 2) * (height * 12)));

console.log(`The volume is ${volume} inches cubed`);