// 1.object programming ( OOP)
// 2.Functional programming  

// var obj = {}

// obj.name = "ali"
// obj.email = "ali@gmail.com"
// obj.list =["first","second","third"],
// console.log(obj.list[2]) //third

// console.log("ali" in obj)

// var bike = {
//     name: "honda",
//     color: "black",
//     fuel: function () {    //method
//         return console.log("test")
//     }
// }
// bike.fuel()


// constructor


// function test() {
//     // var name = "ali"
//     console.log(this)
// }
// test()

// var obj = {
//     name: "ali",
//     test: function () {
//         console.log(this.name)
//     }
// }
// obj.test()



function Student(name, email, password, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = id;
    this.checkIdentity = function () { }   // method (property of the object
}

// var data = new Student("ali", "ali@gmail.com", 123)

var studentData = [
    new Student("ali", "ali@gmail.com", 123, 2), //checkLogin()
    new Student("bilal", "bilal@gmail.com", 333),
    new Student("saad", "saad@gmail.com", 323),
]

// console.log(data)
// console.table(studentData)

function Person(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;

}

Person.prototype.checkStudent = function () {
    console.log(`My name is ${this.name} and email is ${this.email} and age ${this.age}`)
    console.log("name" in Person)
}

var studentData = new Person("ali", "ali@gmail.com", 30)

// console.log(studentData)
studentData.checkStudent()
