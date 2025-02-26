for( let i=1;i<=5;i++){
    console.log(i);
}
// for( let i=10;i>=1;i-3){
//     console.log(i);
// }

//PRINT ODD NO FROM 1 TO 15

for(let i=1;i<=15;i+2){
    console.log(i)
}

//Printn even no from 2 to 10

for(let i=2;i<=10;i+2){
    console.log(i);
}

//infinite loops : when ending condition is always true.

//print multiplication table of 5

let n=prompt("Write your number");
for(let i=n;i<=n*10;i+n){
    console.log(i);
}

//nested for loop

for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`)
    for(j=1;j<=3;j++){
        console.log(j);

    }
}

//while loop

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let j=1;
while(j<=20){
    console.log(i);
    i+2;//
}

//fvt movie

let fvtMoview = "Chhava";
let guess=prompt("Guess my Fvt movie ?");

while(guess!=fvtMovie && guess!="quit"){
    console.log("");
    guess=prompt("Wrong Guess try again.");
}
if(gues==fvtMovie){
    console.log("Congrats you guessed the right movie");
}
else{
    console.log("You Quit");
}

//break keyword

let k=1;
while(k<=10){
   
    if(k===3){
        break;
    }
}

//loops with arrays

let fruits=["apple","mango","banana","litchi","orange"];
  fruits.push("pineapple");
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

//Nested loops with nested arrays

let actor=[["Salman","shahrukh","aamir"],["Hrithik","Ranbir","Shahid"]];
for(let i=0;i<actor.length;i++){
    for(j=0;j<actor[i].length;j++){
        console.log(actor[i][j]);
    }
}

//for of loop : it is like for each loop

let student=["naman","vaidik","siddhant","farhan"];
for(stu of student){
    console.log(stu);
}

//MAKING A TO DO APP

