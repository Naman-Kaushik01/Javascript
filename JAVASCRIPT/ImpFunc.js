let arr=[1,2,3,4,5];

let print=function(el){
    console.log(el);
}
arr.forEach(print);

//Using Arrow Functions

arr.forEach((el)=>{
    console.log(el);
});

let students=[
    {
        name:"naman",
        city:"patna",
        marks:95,
    },
    {
        name:"abhishek",
        city:"noida",
        marks:87,
    },
    {
        name:"vaidik",
        city:"delhi",
        marks:76,
    }];
students.forEach((student)=>{
    console.log(student.city);
});


//Map

let cgpa=students.map((el)=>{
    return el.marks/10;
});
console.log(cgpa);


let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*2;
});
console.log(double);

//Filter : if callback function is true element added else not.

let nums=[4,12,,23,5,7,8,14];
let even=nums.filter((el)=>{
    return el%2==0;
});
console.log(even);

//Every Returns true if every element of array gives true for some function. Else returns false.
//suppose we have to check either array is even

let CheckEven =num.every((el)=>{
    return el%2==0;
});
console.log(CheckEven);

//some : it returns true if one element match the condition
let checkAnyEven =num.some((el)=>{
    return el%2==0;
});
console.log(checkAnyEven);

//Reduce : it reduce the array to a single value

let Add= nums.reduce((res,el)=>(res+el));
console.log(Add);

//Maximum in an Array 

let arr2=[3,9,15,23,4,7];

let checkMaxArr =arr2.reduce((max,ele)=>{
    if(ele>max){
        return ele;
    }
    else{
        return max;
    }
})
console.log(checkMaxArr);

//Check if all numbers in our array are multiple of 10 or not

let checkMultipleOF10 =num.every((el)=>{
    return el%10==0;
})
console.log(checkMultipleOF10);

//find Min Number

let checkMinArr =arr2.reduce((res,ele)=>{
    if(ele<res){
        return ele;
    }else{
        return res;
    }
});
console.log(checkMinArr);

//Default Parameteres : parameters value defined by order

function sum(a,b=3){
    console.log(a+b);
}
sum(4,6);

//Spread : Expends an iterable into multiple values
// use ... (3-dots)
let name="Naman Kaushik";
console.log("Minimum Value in array is : "+Math.min(...arr2));
console.log("Maximum Value in array is : "+Math.max(...arr2));
console.log(...arr2);
console.log(...name);

let newArr2=[...arr2];
console.log(newArr2);

//Spread with object literals
const data={
    email:"kaushiknaman@gmail.com",
    password:"abcd",
};

let dataCopy={...data,id:123,name:"naman"};
console.log(dataCopy);

//Rest : Allows a function to take an indefinite number of arguments and bundle them in an array

function sumation(...args){
    for(let i=0;i<args.length;i++){
        console.log("You gave us: ",args[i]);
    }
}
function min(a,b,c,d){
    console.log(arguments);
    
     
}
min(2,4);

//Destrucuturing

let names=["naman","shubham","vaidik","abhishek","siddhant"];
// let winner=names[0];
// let runnerUp=names[1];

let[winner,runnerup,...others]=names;
console.log(winner);

const student={
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math"],
    username:"karan@123",
    password:"abcd"
};
let {username:user,password:secret,city:place="noida"}=student;
console.log("username :"+user +" password: "+secret +" city " +place);