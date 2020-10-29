let x = 45;

45 + "2" //concatination operator ==452


console.log(``);

let firstWord = "Banana";
let secondWord = "bandana";

console.log(`Banana is less than bandana: ${firstWord.toLowerCase() < secondWord.toLowerCase()}`);


console.log(`5 is greater than 4: ${5 > 4}`);
console.log(`apple is greater than appear: ${'apple' > 'appear'}`);
console.log(`Went is greater than west: ${'west' < 'Went'}`);
console.log(`2 is greater than "12": ${2 > '12'}`);
console.log(`undefined == null: ${undefined == null}`);
console.log(`undefined === null ${undefined === null}`);
console.log(`null == "0": ${null == '0'}`);

if(false == false){
    console.log(`it was equal`);
}


let T = true

if(T == true){
    console.log(`its true!`);
}

if(T == false){
    console.log(`its false!`);
    
}

if(T) console.log(`it was true`);
if("") console.log(`this is false`);


if(T){
    console.log(`it was true`);
}else{
    console.log(`it was false`);
}