// Primitive
// 7 types : String, Number, Boolean, null, undefined,
            //  Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail; // by default undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId) // these two are not same

// Reference (Nom Primitive)

// Arrays, Objects, Functions

const bikes = ["honda", "royal enfield", " splendor"]
let myObj = {
    name: "yash",
    age: 22, 
}

const myFunction = function(){
    console.log("Hello World")
}
