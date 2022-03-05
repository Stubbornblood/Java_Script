//function without parameter
function SayHello(){
 console.log("Hello functions");
}
SayHello();

//fundtion with parameter

function sum(num1,num2){
    let addition = num1+num2;
    console.log(addition);
}

sum(3,5);

//function with return type

function multiply(num1,num2){
    return num1*num2;
}

let ans = multiply(3,5);
console.log(ans);

//function are first class citizen in js

let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,5));

//IIFE -> Immediately invoked function expression

(function(){
    console.log("Hello from IIFE");
})();

//IIFE with Parameter

(function(num1,num2){
    console.log(num1/num2);
})(10,5);