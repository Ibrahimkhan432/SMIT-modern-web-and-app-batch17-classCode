//string literals  (most used)
// var obj = {         
//     name :"ali"
// }
// console.log(obj.name)

//new object 
// var obj = new Object()  
// obj.name = "ali"
// console.log(obj.name)

//object.create()
// var obj = Object.create(Object.prototype)  
// obj.name = "ali"
// console.log(obj.name)

// var obj = new Object(
//     name="Ali"
// )
// console.log(obj)

// var studentData = [
//     ['name', 'Alice'],
//     ['age', 30],
//     ['city', 'New York']
// ]
// var sdata = Object.keys(studentData)
// var sdata = Object.values(studentData)

// var sdata = Object.entries(studentData)
// var sdata = Object.fromEntries(studentData)
// console.log(sdata)

// var data = {
//     name: "ali",
//     roll: 12
// }
// data.age = 30
// console.log(data)
// var result = Object.freeze(data)
// data.address="yasdfu"
// console.log(Object.isFrozen(data))
// console.log(result)

// console.log(Object.seal(data))

// delete data.name
// console.log(data)
// console.log(Object.isSealed(data))

// var stDtata = {
//     sname: "ali",
//     sroll: 10,
//     email: "ali@gmail.com",

// detail: function () {
//     return  `name is ${this.sname} and roll no is ${this.sroll}` //es5


//     detail() {
//         return `name is ${this.sname} and roll no is ${this.sroll}` //es6
//     },
//     updateEmail(uemail) {
//         uemail = uemail
//         return `this is my uopdated email --> ${uemail}`
//     }

// }
// console.log(stDtata.detail())
// console.log(stDtata.updateEmail("ali2@gmail.com"))


// ---assign---
// var obj ={
//     name:"bilal"
// }
// var obj2 ={
//     age:20
// }
// var merged = Object.assign(obj,obj2)
// console.log(merged)

// --call--
// function student(age){
//     console.log(`my name is ${this.name} and age is ${age}`)
// }

// var stdBio ={
//     name:"ali"
// }
// student.call(stdBio,"20")

// --apply--
// function student(age,email){
//     console.log(`my name is ${this.name} and age is ${age}and email is ${email}`)
// }

// var stdBio ={
//     name:"ali"
// }
// student.apply(stdBio,["20","ali@gmail.com"])

// ---bind--
// function studentData(){
//         return `my name is ${this.name}`
// }
// var obj1 = {
//     name:"ali"
// }

// var obj2 = {
//     name : "bilal"
// }

// var result = studentData.bind(obj2)

// console.log(result())


// var data = {
//     name: "ali",
//     age: "30",
//     roll: "40"
// }
// for( var key in data){
//     console.log(key, data[key])
// }


//    -- local storage
var obj = {
    name: "ali",
    roll: 20
}
console.log(obj)

localStorage.setItem("key", JSON.stringify(obj))
console.log(localStorage.setItem("key", JSON.stringify(obj)))

var data = JSON.parse(localStorage.getItem("key"))
console.log(data)

function signup() {
    var name = document.getElementById("signupname").value
    var email = document.getElementById("signupemail").value
    var password = document.getElementById("signuppassword").value
    console.log(name, email, password)

    var stdSignup = {
        name: name,
        email: email,
        password: password
    }

    var savedData = localStorage.setItem("signup", JSON.stringify(stdSignup))
}