let div= document.querySelector("div");
let ul=document.querySelector("ul");
let list=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("Div was clicked");
});

ul.addEventListener("click",function(event){
     event.stopPropagation();
    console.log("ul was clicked");
});

for(lis of  list){
    lis.addEventListener("click",function(event){
        event.stopPropagation();
    console.log("li was clicked");
});
}
