const name="vidhi"
const repocount= 3

console.log(name + repocount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('G-TA');
console.log(gamename[0])
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toLowerCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('T'))

const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(4,-4)
console.log(anotherstring);

const newstringone = "   hello"
console.log(newstringone)
console.log(newstringone.trim());

const url ="https://vidhi.com/vidhi%17khati"
console.log(url.replace('%17','-'));
console.log(url.includes('vidhi'))
console.log(url.split('%17'));

