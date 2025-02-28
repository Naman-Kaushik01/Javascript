function hello(){
    console.log(" ")
}
function printName(){
    console.log("Naman Kaushik");
}
printName();

function isAdult(){
    let age=23;
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }
}

function DiceRoll(){
    const guess=Math.floor(Math.random()*6+1);
    console.log(guess);

}
DiceRoll();
DiceRoll();
DiceRoll();
DiceRoll();

//Function with Arguements : Order is very important

function YourInfo(name,age){
    console.log(`${name} is ${age} years old`);
}
YourInfo("Naman",18);

function GiveAvg(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
GiveAvg(7,7,7);

function PrintTable(a){
    for(let i=a;i<=a*10;i+=a){
        console.log(i);
    }

}
console.log("Table");
PrintTable(5);

//Return Keyword

function SumOfn(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

console.log("The sum of n is:"+SumOfn(10));

let str =["aa","pp","pp","ll","ee"];

function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result =result+str[i];
    }
    return result;
}
console.log("You entered :" +concat(str));

//SCOPE : means accessibility of variables,objects and functions

let sum=54; // global scope

function calcSum(a,b){
    let sum=a+b;//Function Scope
    console.log(sum);
}
 //Block Scope : when we write a variable between { let a} you cannot access a variable from outside of the curly braces.
 //if we use "var a=1" we can access from anywhere but it is not good practice


 //LEXICAL SCOPE : A variable defined in outside of function can be used in inner function, but opposite is not true.
 // it is possible with the help of hoisting

function outer() {
    let x=6;
    let y=7;
    function inner(){
        console.log(x);
    }

    inner();
}
outer();


//Function Expression

let difference =function(a,b){
    return a-b;
}
console.log(difference(4,2));


//HIGHER ORDER FUNCTIONS : returns a function


let func=function oddOrEvenFactory(request){
    if (request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    if(request=="even"){
        let even=function(n){
            console.log((n%2==0));
        }
        return even;
    }else{
        console.log("Wrong INPUT!");
    }
}

//METHODS

const calculator ={
     add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
// we can also make these functions like

const AdvCalculator ={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};

console.log(calculator.add(3,5));




