// primitive
//7 call by value
//number
//boolean
//string
//undefined
//null
//symbol
//BigInt
const id = Symbol('123')
const idvalue = Symbol('123')
console.log(id===idvalue)
console.log(id==idvalue)
//reference type non-primitive
//arrays
//objects
//functions
const heros = ["shaktiman",'batman']
let myobj = {
    name:"hello",
    age:80,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction)