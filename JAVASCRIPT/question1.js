// CREATE A SYSTEM TO CALCULATE POPCORN BASED ON THE SIZE CUSTOMER ASKED FOR
// SIZE XL PRICE 250
//SIZE L PRICE 200
//SIZE M PRICE 100
// SIZE S PRICE 50

let size='XL';
if(size=='XL'){
    console.log("Price is 250");
}
else if(size=='L'){
    console.log("Price is 200");
}
else if(size=='M'){
    console.log("Price is 100");
}
else if(size=='S'){
    console.log("Price is 50");
}


// A string is a good string if it start with a and len>=3 check
let str="abcde";
if(str[0]==='a'&& str.length>=3){
    console.log("Good String");
}
else{
    console.log("Not satisfying the conditions");
}

// USE SWITCH STATEMENT TO PRINT THE DAY OF THE WEEK USING A NUMBER VARIABLE 'DAY WITH 1 TO 7

let day =3;
switch (day) {
    case 1:
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break;
   
    case 3:
    console.log("Wednesday");
    break;

    case 4:
    console.log("Thursday");
    break;

    case 5:
    console.log("Friday");
    break;

    case 6:
    console.log("Saturday");
    break;

    case 7:
    console.log("Sunday");
    break;
    

    default:
    break;
}