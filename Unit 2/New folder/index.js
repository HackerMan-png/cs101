let userInputSideLength = prompt("What is the side length")
let userInputRadius = prompt("What is the radius of the circle?")
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solving for the square
let squarePerimiter = (userInputSideLength * 4);
let squareArea = (userInputSideLength ** 2);
let cubeVolume = (userInputSideLength ** 3);
let cubeSurfaceArea = (6 * userInputSideLength ** 2);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Solving for the circle
let circleCircumference = (2 * Math.PI * userInputRadius);
let circleArea = (Math.PI * userInputRadius ** 2);
let sphereVolume = ((4 / 3) * Math.PI * (userInputRadius ** 3));
let sphereSurfaceArea = (4 * Math.PI * (userInputRadius ** 2));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log("The perimiter of the square is:")
console.log(squarePerimiter)
console.log("The area of the square is:")
console.log(squareArea)
console.log("The cube volume is:")
console.log(cubeVolume)
console.log("The cube surface area is:")
console.log(cubeSurfaceArea)
console.log("The circle circumference is:")
console.log(circleCircumference)
console.log("The circle area is:")
console.log(circleArea)
console.log("The sphere volume is:")
console.log(sphereVolume)
console.log("The sphere surface area is:")
console.log(sphereSurfaceArea)