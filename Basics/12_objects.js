// singleton type of declaration of an object
// :- When we are using create an object through literal so it cant be created a singleton and when we are using to create an object with constructor its create the objects.


//Object Literals Diclaration Type
const user = {
  name: "Reetu",
  age: 19,
  location : "WB",
  isLogin : false,
};
console.log(user)
//There are two possible way to show the value of an object 
console.log(user.name) //First methood
console.log(user["name"]) //Second methood



//question :- Create a symbol and use through the object methood
const sym = Symbol("mykey")
const obj = {
  name: "Reetu",
  age: 19,
  location : "WB",
  isLogin : false,
  [sym] : "Mykey"
}
console.log(obj)


//if u want fix the some value in object so u can use freeze methood
Object.freeze(obj) // when you are using function please remove this methood or comment this out
obj.name = "Heloo"
console.log(obj)



//Creating a function and then access the value
obj.greeting = function(){
  console.log(`Hello ${this.name} welcome to JS World`)
}

//here we accessing the name property from object using this methood

obj.greeting2 = function(){
  console.log("Hello Dosto aur kya hal chal ?")
}

console.log(obj.greeting());
console.log(obj.greeting2());
//here we are just printing the normal value


//Object Constructor Declaration type
// Object.create()