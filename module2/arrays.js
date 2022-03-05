//empty
let arr=[];
console.log(arr);

//elements with array
let elementsArray=[1,2,34,5,"Hello Duniya",false,'c',4.5];
console.log(elementsArray);
console.log(elementsArray[4]); //element of 4th index
console.log(elementsArray[0]); 
elementsArray[4]="Hello friends";
console.log(elementsArray);

console.log("``````````````````````````````````````");

//Array Methods

console.log("Array before push :"+elementsArray);
elementsArray.push('new item');
console.log("Array after push : "+elementsArray);

//push bascially add items at the end of the array;

console.log("Array before pop :"+elementsArray);
elementsArray.pop();
console.log("Array after pop : "+elementsArray);


//pop bascially remove items from the end of the array;

console.log("Array before shift :"+elementsArray);
elementsArray.shift();
console.log("Array after shift : "+elementsArray);


//shift bascially remove items from the start of the array;

console.log("Array before unshift :"+elementsArray);
elementsArray.unshift("Pehla pyar")
console.log("Array after unshift : "+elementsArray);

//unshift bassically add elements at starting of array

//length
let length=elementsArray.length
console.log(length);










