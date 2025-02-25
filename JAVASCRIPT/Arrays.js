let students =["Naman","Aman","Vaidik"];
console.log(students);
//Array is of object type in javascript
console.log(typeof(students));

// We can also create empty array
let arr=[];

console.log(students[0][1]);

//ARRAYS ARE MUTABLE IN JAVASCRIPT

let fruits =["mango","apple","banana","orange"];
fruits [1]="Guava";
console.log(fruits);

fruits[10]="apple"; // it will make the length of array 11.

//ARRAY METHODS

//Push : add to end
//Pop :delete from end and returns it.
//Unshift : add to start
//Shift : delete from start & returns it

let cars=["toyota","suzuki","porsche","bmw"];
console.log(cars);
cars.push("audi");
console.log(cars);

console.log(cars.pop());

cars.unshift("mercedes");
console.log(cars);
console.log(cars.shift());

//PRACTICE QUE

let months=["January","July","March","August"];
months.shift();
months.shift();
months.unshift("June");
months.unshift("july");

console.log(months);

//ARRAY METHODS

//indexOf : return index of something

let color=["red","blue","orange"];
console.log(color.indexOf("blue"));

// if we have to check a string is present or not

console.log(color.includes("red")); // true if present else false

//Concetanation and Reverse

let primary =["apple","ball","cat"];
let secondary=["dog","elephant","fish"];

console.log(primary.concat(secondary));
console.log(primary.reverse());

//slice : copies a portion of an array


let name=["naman","vaidik","siddhant","surbhi","satyam","farhan"];
console.log(name.slice(2));
console.log(name.slice(0,3));

//splice : removes/replace/add elements in place
// it does changes in original array

let stu=["naman","vaidik","siddhant","surbhi","satyam","farhan"];
console.log(stu);

console.log(stu.splice(5));
console.log(stu.splice(2,2));

console.log(stu.splice(2,0,"siddhant","surbhi"));
console.log(stu);

//Sort : sorts an array , we will use this when either we have string or char

console.log(stu.sort());
let marks=[99,43,64,88,12,55];
console.log(marks.sort());

//Array Reference

let arr1=['a','b','c'];
let arr2=arr1;
arr2.push('d');
console.log(arr1);

// constant arrays : we can perform various operations , but we cannot convert this into a complete new array.

const newArr =[1,2,3]
newArr.push(4);
console.log(newArr);

// NESTED ARRAY / MULTI DIMENSIONAL ARRAY

let nestedArr =[[1,2],[3,4],[4,5]];
console.log(nestedArr);
console.log(nestedArr[1][0]);
