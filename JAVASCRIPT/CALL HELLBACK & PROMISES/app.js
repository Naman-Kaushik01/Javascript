function hello(){
    console.log("Hello");
}
function demo(){
    hello();
}
demo();

//VISUALIZING CALL STACK

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans= two()+one();
    console.log(ans);
}
three();

//BREAKPOINTS

//js is single threaded

setTimeout(function(){
    console.log("Hello Naman");
},2000);

console.log("Are you learning js ");

let h1=document.querySelector("h1");


function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay);
    
}


//callbacks nesting --> callback hell

changeColor("red",2000,()=>{
    changeColor("blue",2000,()=>{
        changeColor("green",2000,()=>{
            changeColor("yellow",4000);
        });
    });
});


//This is a call back hell

 function saveToDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
 }

 saveToDb("Naman",()=>{
    console.log("Data was successfully saved");
    saveToDb("Alex",()=>{
        console.log("Saved to db");
    },()=>{
        console("Week Connection");
    })
 },()=>{
    console.log("week connection");
 })

//Optimizing this code using promises

function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("data was saved");
        }
        else{
            reject("week connection");
        }
    });
 }

 saveToDb("Alex");

 //then and catch method

saveToDb("Data 1") //promise object
    .then((result)=>{
        console.log("promise was resolved");
        saveToDb("Data 2"); //Promise Chaining
    })
    .then(()=>{
            console.log("data 2  was saved");
            saveToDb("Data 3",result); 
    })
    .then((result)=>{
            console.log("data 3  was saved",result);
    })
    .catch((error)=>{
        console.log("promise was rejected",error);
    });



