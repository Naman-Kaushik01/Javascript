let inp= document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("Key was pressed");
//     console.log("key =",event.key);
//     console.log("key =",event.code);
// })
inp.addEventListener("keydown",function(event){
    console.log("Code =",event.code);
    if(event.code="ArrowUp"){
        console.log("Character Moving Forward");
    }
    else if(event.code="ArrowDown"){
        console.log("Character Moving Backward");
    }
    else if(event.code="ArrowLeft"){
        console.log("Character Moving Left");
    }
    else if(event.code="ArrowRight"){
        console.log("Character Moving Right");
    }
});

//How we use this in a game.

inp.addEventListener("keyup",function(){
    console.log("Key was released");
})