
var basic = [3.99, "100GB", true]

var monthly = [3.99, 5.99, 9.99]

// variable form
// var name ="ali"
// var course = "wma"
// var age = 20
// var roll = 39

// array form
// var student = [
// "ali",
//  "wma",
//  20,
//  39]

// object form
// start with curly bracket
// key value 
// no sequence like indexs

//   ---------JSON --------
// js object notation
// frontend interact with backend through API (in json form)

// var student = {
//     course: "wma",
//     "name": "ali",  //accessable
//     age: 20,
//     roll: 39
// }
// console.log(student["name"])
// console.log(student)
// console.log(student["course"])
// or you can access through dot
// console.log(student.name)

// student.name = "bilal"
// or
// student["name"] = "bilal"
// console.log(student.name)


var car = {
    numberPlate: 1234,
    model: 2020,
    power: "640cc",
    company: "toyota",
    color: ["red", "blue", "black"],

    specification: [
        { red: "manual" },
        { blue: "auto" },
        { black: "hybrid" },
    ],
    price: { black: "20 lac", red: "21 lack" },

    speed: function () {
        return `model is ${car.model} and power is ${car.power}`
    },
    // speed: () => {
    //     console.log("very fast car")
    // }
}
// console.log(car["color"][0])

// console.log(car.color[1])
// console.log(car.specification[1]["blue"])

// console.log(car.price.red)
// console.log(car["price"]["red"])

// function call
// console.log(car.speed())

// add data
console.log(car.color[car.color.length-1])

car.fuel = "petrol"

car.features = ["khadde dar", "6 tyre", "urti bhi he"]
console.log(car.features[0])

delete car.speed
delete car.model


console.log("price" in car)

// var obj = {}

// obj.car = undefined

// console.log(obj)
