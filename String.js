let str = "I am a String";
console.log(str);

//lenegth of string

let len = str.length;
console.log(len);

//sliced method;

let slicedArr =  str.slice(2,5);
console.log(slicedArr);

//Replace Method
//replace a part with given word

let replaceStr = str.replace("am","was");
console.log(replaceStr);
//This Explain that replace dont change original name
console.log(str);

//Will convert to Upper
let upperCase = str.toUpperCase();
console.log(upperCase);

//Will convert to lower String
let lowerCase = str.toUpperCase();
console.log(lowerCase);

//concatinate

let firstName = "Shiv";
let lastName = "Krishna";
let fullName = firstName.concat(lastName);
console.log(fullName);
console.log();


//Splite

let splittit = str.split(" ");
console.log(splittit);

//Trime

let text = "       Hello World!        ";
let result = text.trim("Hello");
console.log(result);