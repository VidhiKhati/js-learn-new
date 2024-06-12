//singleton - constructors
//objects literal

const mysym = Symbol("key1")


const JsUser = {
    name:"Vidhi",
    "full name" : "Vidhi Khati",
    [mysym] : "mykey1",
    age: 21,
    location: "Delhi",
    email: "Vidhi@gmail.com",
    isLoggedIn: false,
    LastLogginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "vidhi@google.com"
//Object.freeze(JsUser)
JsUser.email = "vidhi@chatgpt.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello jsuser");
}

JsUser.greeting2 = function(){
    console.log(`hello jsuser, ${this.name}`);
}

//console.log(JsUser.greeting)//undefined
console.log(JsUser.greeting2())