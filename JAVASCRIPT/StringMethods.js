//Methods : Actions that can be performed on an objects.
let msg="   Hello  ";
console.log(msg);
console.log(msg.trim());

// let pass=prompt("Enter Your Passwprd :");
// console.log(pass.trim());


//STRINGS ARE IMMUTABLE IN JAVASCRIPT
// NO CHANGES CAN BE MADE TO STRINGS

let name ="Naman Kaushik";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//STRING METHODS WITH ARGUMENTS

//indexOf : returns the first index of occurence , if the value not found it returns -1

let str ="ILoveCoding";
console.log(str.indexOf("love"));
console.log(str.indexOf("C"));

//METHOD CHAINING

let msg1 ="   hello naman  ";
let newmsg1 = msg1.trim();
console.log("after trim : " ,newmsg1);
newmsg1 = msg1.toUpperCase();
console.log("after uppercase :",newmsg1)

let newmsg = msg1.trim().toUpperCase();
console.log(newmsg);

//SLICE : Returns a part of original string as a new string
//We can pass value like starting index  + ending index, only starting index , and also like -2  which means start from length-2
let nameIS ="Sharda University";

console.log(nameIS.slice(0,6));
console.log(nameIS.slice(7,nameIS.length));
console.log(nameIS.slice(-3));

//replace 

let newNameIs=nameIS.replace("Sharda","Amity");
console.log(newNameIs);

//repeat

let fruit ="Mango";
console.log(fruit.repeat(5));







