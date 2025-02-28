//Object Literals : There is no specific order.
const student={
    name:"Naman",
    age:20,
    marks:90
};
// console.log(student);

const item ={
    price:100.99,
    discount:50,
    colors:["red","yellow"]
};

//Creating a Thread/Twitter Post
  
const post={
    username:"@NamanKaushik",
    content:"Hello Guyss How are you ?",
    likes:26,
    reposts:5,
    tags:["@naman" ,"@rey"]

};
console.log(post);
console.log(post.content);

//making a random object : anything written in object which is not string is automatically converted into string

const random={
    1:"a",
    2:"b",
    null:"c",
    true:"d",
    undefined:"e"
};
console.log(random["1"]);

//Add /Update Value

const user={
    name:"naman",
    city:"noida"

};
console.log(user);
user.city="mumbai";
user.bloodgroup="B+";

//Object of Objects :

const classInfo={
    naman: {
        grade:"A+",
        city:"Delhi"
    },
    aman:{
        grade:"B+",
        city:"Noida"
    },
    karan:{
        grade:"O",
        city:"ghaziabad"
    }
}
console.log(classInfo.naman);

//Array Of Objects

const userInfo=[
    {
        name:"naman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"Sujal",
        grade:"B+",
        city:"Jammu"
    },
    {
        name:"deepak",
        grade:"A+",
        city:"Andhra"
    }
];
console.log(userInfo[1].name);

//Math Object

console.log(Math.floor(5.7));// it gives nearest smaller
console.log(Math.pow(2,4));
console.log(Math.ceil(5.4)); // it gives nearest larger

//Random Integers using Math.random()

let num=Math.random();
num=num*20; // we multiply num with the maximum value we want.
num=Math.floor(num); // it gives a proper integer
         

