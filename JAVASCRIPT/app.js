//BASICS
console.log("Hello JavaScript");
let pencilPrice =10;
let eraserPrice=5;
let tp=pencilPrice + eraserPrice ;
let output ="The total price is :" +tp +"rupees";
console.log(output);
let op=`The total price is : ${pencilPrice +eraserPrice} rupees`;
console.log(op);


//ARITHMETIC OPERATORS

let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//UNARY OPERATORS

console.log(a++);
console.log(++a);

//OPERATORS

let age=13;
console.log(age>=18);
let n=5;
let m='5';
// it ignores the type. it just compare the value.
console.log(n==m);
//=== checks value and type both
console.log(n===m);


0==' '; // true
0==false; // true
null==undefined; //true

// IF STATEMENT
console.log("Befor my If Statement");

if(age>=18){
    console.log("You can Vote.");
    console.log("you can drive");
}
//ELSE IF
else if(age>=14){
    console.log("You can ride bicycle");
}
else if(age<14){
    console.log("You are not eligible");
}

// CH-2 //PRACTICE QUESTION

let color='green';
if(color==='red'){
    console.log("STOP");
}
else if(color==='yellow'){

    console.log("Wait");
}
else if(color==='green'){
    console.log("You can go");
}


