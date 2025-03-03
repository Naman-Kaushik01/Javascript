//Selecting Elements

let smallImage =document.getElementsByClassName("oldImg");
for(let i=0;i<smallImage.length;i++){
    console.dir(smallImage[i]);
}

for(let i=0;i<smallImage.length;i++){
    smallImage[i].src="spiderman_img.png";
    console.log(`value of img no. ${i} is changed`);
}

//Selecting Element By TagName

console.log(document.getElementsByTagName("p"));

//query selector

//allows us to use any css selector : it returns the firts match

document.querySelector("h1");
document.querySelector("#description");
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));

//using properties and method

// let heading= document.querySelector("h1");
// heading.innerHTML=<u>"Spider Man"</u>;

// let  img=document.querySelector('img');
// console.log(img.getAttribute('mainImage'));

// img.setAttribute('id','main');

let links=document.querySelectorAll(".box,a");
for(let i=0;i<links.length;i++){
    links[i].style.color="purple"  //inline style
}

//adding elements
document.createElement('p');
let newP=document.createElement('p');
console.log(newP);
newP.innerText="Hii i am new p";
let body=document.querySelector("body");
body.appendChild(newP);

newP.append("This is new text") //it adds at the last
newP.prepend("Hello guyss");
newP.insertAdjacentElement('beforebegin',newP);

body.remove(newP);
