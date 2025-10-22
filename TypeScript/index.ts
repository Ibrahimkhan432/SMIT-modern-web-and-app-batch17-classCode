// //  javascript
// string,
// number,
// boolean,

// // typescipt
// any,
// string,
// enum,
// indexes,
// signatures,

// var myName: string = "ali";
// // myName = 30;  //not allowed due to type
// console.log(myName);

// var age:number =30
// age = 40

//object
// var obj:{name:string,age:number} = {name:"ali",age:20,}
interface UserData {
  name: string;
  age: number;
}

var person1: UserData = {
  name: "ali",
  age: 20,
};

interface person2 extends UserData {
  isActive: boolean;
}

var newUser: person2 = {
  name: "bilal",
  age: 30,
  isActive: true,
};
// newUser.password  nort exist in type

var arr: readonly [number, string, boolean] = [1, "ali", true]; // tuple
// arr.push("bilal")

// var arr2:string[] =[]

// functions

// function test(name:string,age:number):string{
//  return `this is tpye script array created by ${name} and age is ${age}`
// }
// // console.log(test("ibrahim"))
// console.log(test("ali",30))

// var uname:any ="ali"
// uname = 40

// var  bike ={
//     model:"seventy"
// }
// bike.model ="fifty"

// index signatures

// var obj : {[index :string]:number} = { };
// // obj.myName = 30,
// obj.myName = "thirty" // error
// console.log(obj)

// enum UserStatus {
//   bad = 401,
//   good,
// }
// console.log(UserStatus.good)


// function sum (a:number,b:number,c?:number){
//     return a+ b + (c || 0)
// }
// console.log(sum(2,3,4))
// function sum (a:number,b:number=2){ //default parameters
//     return a+ b 
// }
// console.log(sum(2))

// var  names = "ali"
// var names ="bilal"
// console.log(names)