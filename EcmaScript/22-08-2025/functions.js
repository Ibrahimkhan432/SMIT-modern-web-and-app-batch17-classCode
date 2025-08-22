
// function multiply(  ){
// console.log("inside function")
// }
// multiply()    //refrence


// function todayTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     console.log("time: " + theHr + ":" + theMin);
// }
// todayTime()  // invoke function


//  -----------Passing data------------


// var num1 =1
// var num2 =2


// function add(num1, num2) {  // parameter
//     console.log(num1 + num2 )
// }
// add(5,3) // argument


function bio(name, age, subject) {
    // console.log("my Name is " + name + " my age is " + age + " i like " + subject)

//  string interpolation
console.log(`my Name is ${name} and my age is ${age} i like ${subject}`)

console.log(`${age} ${subject}`)
}
var name = "ibrahim";
bio(name,23,"maths")











