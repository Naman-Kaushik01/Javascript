let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");

function changeColor(){
    this.style.backgroundColor="yellow";
}

btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);