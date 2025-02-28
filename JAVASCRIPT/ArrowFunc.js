//This keywordc: refers to an object that is executing the current piece of code.
const student={
    name:"Naman",
    age:20,
    eng:95,
    maths:80,
    phy:97,
    getAvg(){
        let avg=(this.eng+this.maths+this.phy)/3;
        console.log(this.name +" Got " +avg);
    }
}
student.getAvg();


// try & Catch -->try test the error in code -->catch statement execute if an error in try block

try{
    // let a=5;
    console.log(a);
}catch(e){
    console.log(e);
}

//Arrow Functions
const sum=(a,b)=>{console.log(a+b)};
sum(2,4);

const cube=(n)=>{return n*n*n};
console.log(cube(4));

//Implicit return : in this case we will use parenthisis

const mul=(a,b)=>(a*b);
console.log(mul(4,2));

//Set Timeout : when we want to set timer for a process

console.log("hii there");
setTimeout(()=>{
    console.log("Sharda University");
    },5000);

console.log("Welcome to");

//Set Interval

let id=setInterval(()=>{
    console.log("Sharda University");
},2000);

console.log(id);
clearInterval(2);//To stop

//This With Arrow Functions

const user={
    name:"naman",
    salary:20,
    prop:this,
    getName :function(){
        console.log(this);
        return this.name;
    },
    getSalary:()=>{
        console.log(this);
        return this.name;
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this)
        },2000);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this)
        },2000);
    }

};

//Printing hello world 5 times with the interval of 2 secs

let id3=setInterval(()=>{
    console.log("hello World");
},2000);

setTimeout(()=>{
    clearInterval(id3);
    console.log("paused");
},10000);

