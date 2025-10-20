// function test(){ //pure function
//     console.log("first function console")
// }
// test()
// setTimeout(() => {
//     console.log("inside set interval function")

// }, 3000);  //async function

// console.log("third console")

// function userName(name,callback){
// console.log("name is ", name)
// callback()
// }

// function sayHello(){
//     console.log("how are you")
// }

// userName("ali",sayHello)

// function maths(a,b,result){
//  return result(a,b)
// }
// function add(x,y){
//     return x + y
// }
// // add()
// function multiply(x,y){
//     return x * y
// }
// // multiply()

// console.log(maths(2,3,multiply))

// lexical scope

// var a = 2
// console.log(a)

// function test(){
//     let a = 2 //function scope or local scope
// }
// console.log(a)  
// // var a = 3  //global scope
// test()

// var a = undefined
//  var - hoist and initialzed
// console.log(a)
// var a =2
// console.log(a)

// console.log(a);

// tdz temporal dead zone. same as const
// let a = 2; //hoist but not initialized
// console.log(a)
// let a = 2
// if(true){
// }
// console.log(a)

// closures

// function counter(){
// let count = 0

// function increment(){
//     console.log("count-->",count)   //closure
//     count++
// }
// return increment

// }
// const result = counter()
// result()
// result()
// result()

// IIFE - immediately invoke function expression
// let var1 = "outside iife"
// (()=>{
//     let var2 = "inside iife"
// })()
// console.log(var2)
// console.log(var1)

// functional 
// object oriented. 

// class Car{
//     constructor(name,year){
//         this.name=name
//         this.year=year
//     }
//     details(){
//         console.log("this is " + this.name + "car and year is " + this.year)

//     }
//     }
//     const car1= new Car("honda ",2023)
//     const bike = new Car("unique ",2025)

//     car1.details()
//     bike.details()

// var obj ={
//     name:"ibrahim",
//     ages:20,
//     age:"twelve"
// }
// console.log(obj)
// js types
Number
String
Boolean

// tsc types
// any
// never
// union

// var names:string = "ibrahim"
// names = 30
// console.log(names)


var arr = ["ali",20,true]
 arr:[String,number,boolean] = ["ali",20,true]