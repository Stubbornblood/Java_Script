let n = 6;
let flag = 0;
for(let i=2;i*i<=n;i++){
    if(n%i==0){
        flag = 1;
        break;
    }
}
if(flag==0){
    console.log("Is Prime");
}else{
    console.log("Is not prime");
}
