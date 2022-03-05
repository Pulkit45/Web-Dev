//printig in javascript
console.log("Printing");

//variables in javascript
let a=10;  //Number
console.log(a); 

let char='a'; //character
console.log(char);

let str="Hello World" //string
console.log(str);

let bol=true;  //Bollean
console.log(bol); 

//loops 

for(let i=0;i<5;i++){
    console.log(i);
}


let count=10;
while(count>0){
    console.log(count);
    count--;

}

//is prime

let n= 34935;
let isPrime=true;

for(let i=2;i*i<n;i++){
    if(n%i==0){
        isPrime=false;
    }
}
if(isPrime ==true){
    console.log("Prime");
}else{
    console.log("Not an Prime");
}