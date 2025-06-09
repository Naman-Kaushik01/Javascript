//async keyword

async function greet(){
    throw"404 NOT FOUND";
    return "Hello";
}
greet()
.then((result)=>{
    console.log("Promise was successfull",result );
})
.catch((err)=>{
    console.log("promise was rejected with error",err);
});

//Await keyword -- we can use this keyword only in async function

function getNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
           console.log(num);
           resolve();
        },1000);
    });
}
async function demo() {
    await getNumber();
    await getNumber();
    await getNumber();
    await getNumber();
    await getNumber();
    getNumber();
    
}
let h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        let n=Math.floor(Math.random()*5)+1;
        if(n>3){
            reject("Promise rejected");
        }
        setTimeout(()=>{
        h1.style.color=color;
        resolve("color changed");
    },delay);
    
    })
}
async function test(){
 //HANDLING REJECTION

    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("purple",1000);
        await changeColor("pink",1000);
        changeColor("red",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);

    }
    

    
    
    let a=5;
    console.log(a);
}

