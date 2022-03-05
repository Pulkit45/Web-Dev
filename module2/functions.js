// function in js without paramter and without return type
function Hello(){
    console.log("hello World!");
}

Hello();

//function with paramter
function sum(num1, num2){
    let addition=num1+num2;
    console.log("Addition of two numbers: " + addition);
}
sum(3,4);

//function with return type

function multiply(num1,num2){
    return num1*num2;
}
let ans=multiply(3,5);


//storing function a variable

let a=function sub(num1,num2){
    return num1-num2;
}
console.log(a(8,1));

//functions are also called first class citizens as they can stored in a variable

//IIFE => Immedaitely  Invoked Function Expression
(function(){
    console.log("Hello from IIFE");
})();

//IIFE  with paramters

(function(num1,num2){
    console.log(num1/num2);
})(4,2);

