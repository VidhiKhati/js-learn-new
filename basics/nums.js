const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(1))

const othernumber = 123.89473
console.log(othernumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// MATHS

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); // 0 se 1 ke bich value aayegi
console.log((Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.random() * (max-min+1)+min)