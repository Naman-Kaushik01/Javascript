
// question 1
let num=20;
if(num%10==0){
   console.log("Good");
}
else{
    console.log("Bad");
}

//question 2 TAKING USER INPUT

// let UserName =prompt("Enter Your Name : ");
// let age=prompt("Enter Your age :");
// let msg =UserName +" is "+ age +" Years old";
// console.log(msg);

// QUESTION 3

let month=4;
switch (month) {
    case 1:
    console.log("January , February , March");
    break;

    
    case 2:
    console.log("May , June , July");
    break;

    
    case 3:
    console.log("August , September ");
    break;

    
    case 4:
    console.log("October , November , December");
    break;



    default:
        break;
}

//QUESTION 4

let str="Apple";
if(str[0]==='A' || str[0]==='a' && str.length>5){
    console.log("Golden String");
}
else{
    console.log("Not golden String")
}

// QUESTION 5


// Question 6
let num1=32;
let num2=47852;

if(num1%10 ===num2%10){
    console.log("Have same last digit");
}
else{
    console.log("Not matching");
}