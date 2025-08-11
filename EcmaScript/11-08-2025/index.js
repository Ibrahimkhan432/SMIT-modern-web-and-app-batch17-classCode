// var myName = "ali"
// var myAge = 20

// if (myName == "ali" &&          (myAge < 20 || myName == "ali")) {
//     console.log("your name is " + myName)
// }

// else if (myName == "saad" && myAge <= 20) {
//     console.log("your name is " + myName + " and your age is " + myAge)
// }

// else {
//     console.log("you are unknown")
// }
// console.log("last line")


//  --  nested if ---

// var a = 2
// var b = 3
// var c = 4

// var x = 2
// var y = 3
// var z = 4

// if (a == x) {
//     if (b == y) {
//         c = a
//     }
//     else {
//         c = y
//     }
// }
// else {
//   console.log("last else")
// }


// --array ----
// collection of data and data types 

// var array = ["a", 2, true, undefined, null] // inner data called elements or cardiinals
//  for acces of elements we use indexes -- index starts from 0 means when length is 5 th indexes will be 4
// console.log(array[5])  //  5 is a index not lentgh

// course -- error handling in js -- freecodecamp 
// var array = []
// // console.log(array[0])
// array[0] = "a"
// array[1] = "b"
// array[3] = "c"
// console.log(array)
// console.log(array[2])


//  -- array methods --
// var array = ["a", 1, "b", 2]
// array.push(true)
// array.pop()
// array.shift()
// array.shift()
// array.shift()
// array.unshift(true)
// array.unshift(true)
// console.log(array)

//  --- slice and splice -- 
// var array = ["a", 1, "b", 2]

// //0 means index and 2 means how many index (quantity)
// var modifiedArray = array.splice(0, 2) 
// console.log(array)
// console.log(modifiedArray)


// --- slice --
// var array = ["a", 1, "b", 2]

// //0 means index and 2 means how many index in last
// var modifiedArray = array.slice(0, 2)  // return copy in new array
// console.log(modifiedArray)
// console.log(array)

var students = ["ali", "bilal", "saad", "ibrahim"]
// console.log(students[0][0]) // return a

// for (let i = 0; i <students.length; i++) {

//     if (students[i] == "bilal") {
//         console.log("index 2")
//         break
//     }
//     console.log(students[i])
// }

//   --- nested for loop --- 

// for (var i = 0; i < 5; i++) { //outer loop 

//     for (var j = 0; j <= 10; j++){  //inner loop

//         console.log(" i--> ", i, "j--->", j)
//     }


// }
 
//  table of 2 to 5 with starts from 0
// for (var i = 2; i <= 5; i++) {

//     for (var j = 0; j <= 10; j++) {

//         console.log(i + " X " + j + "= " + (i * j))
//     }
// }

//  presentation in next class 
// every student create a slides or pdf 
//  array or for loop 