let button1 =document.querySelectorAll(".button1");

console.dir(button1);


// button1.onclick= function(){
//     alert("Button was clicked")
// }
sayHello = function(){
    alert("Hello")
}
sayName =function(){
    alert("Naman");
}

// Using onclick

// for(btn of button1){
//     btn.onclick=sayHello;
//     btn.onmouseenter = function(){
//         console.log("You entered a button");
//     }
// }

// Adding Event Listener on buttons now.

for(btn of button1){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("click",function(){
        console.log("You Double clicked")
    });
}




//ChatGPT
// let buttons = document.querySelectorAll(".button1");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     alert("Button clicked!");
//   });
// });
