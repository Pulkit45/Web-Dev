let str="I am String";
console.log(str);

//length of string

let len=str.length;
console.log(len);

//sliced method => part return krta hai range jitni aap dete ho
let slicedArray=str.slice(2,5);
console.log(slicedArray);

//replace method => replace krta jaunsa part hum chate hai but yeh original string ko cahnge nhii krta
//vooh same hae rhete hai
let replaceStr=str.replace("am","was");
console.log(replaceStr);

let uppercaseStr=str.toUpperCase();
console.log(uppercaseStr);

let lowercaseStr=str.toLowerCase();
console.log(lowercaseStr);

//concate
let firstName="Pulkit";
let lastName=" Sharma"
let fullName=firstName+lastName;
console.log(fullName);

