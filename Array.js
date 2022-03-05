//Empty array
let arr = [];
console.log(arr);

//Array With Elements

let eleArr = [1,2,3,"Hello i'm array",false,'c',4.5];
console.log(eleArr);
console.log(eleArr[4]);

//Array Element Replacement

eleArr[3] = "HI";
console.log(eleArr);

console.log("###########################################");
//Array Methods
//1.push
console.log(eleArr);
console.log("Array Before Push : "+eleArr);
eleArr.push("new item");
console.log("Array after Push :"+ eleArr);

//2. POP

console.log("Array before pop : ");
console.log(eleArr);
eleArr.pop();
console.log("Array after pop : "+ eleArr);

console.log("Array before shift"+eleArr);
eleArr.shift();
console.log("Array after Shift: "+eleArr);

//4 unshift

console.log("Array before unshift : "+eleArr);
eleArr.unshift("newly added element in front");
console.log("Array after unshift : "+eleArr);

//5 length

let len = eleArr.length;
console.log(len);