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