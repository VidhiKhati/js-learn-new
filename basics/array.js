//array

const myarr = [0,1,2,3,4,5]// diff type ke bhi hoskta
const myheroes = ["superman","shaktiman"]
const hello = new Array(1,2,3,4,5)
// resizeable hote hai
console.log(myarr[0])
//methods
//myarr.push(6)
//myarr.pop()
//myarr.unshift(9)
//myarr.shift()

//console.log(myarr.includes(9))
//console.log(myarr.indexOf(3));

//const newArr = myarr.join()
//console.log(newArr);

// console.log("A",myarr);
// const myn1 = myarr.slice(1,3)
// console.log(myn1)
// console.log("b",myarr);
// const myn2 = myarr.splice(1,3)
// console.log("c",myarr);
// console.log(myn2)

const heroes1 = ["thor","Ironman","spiderman"]
const heroes2 = ["superman","flash","batman"]

// heroes1.push(heroes2)
// console.log(heroes1);
// const allheroes = heroes1.concat(heroes2)
// console.log(allheroes);

// const allnewheroes = [...heroes1,...heroes2]
// console.log(allnewheroes);
// const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const realanotherarray = anotherarray.flat(Infinity)
// console.log(realanotherarray);


console.log(Array.isArray("hello"))

console.log(Array.from("hello"))

console.log(Array.from({name:"hello"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));