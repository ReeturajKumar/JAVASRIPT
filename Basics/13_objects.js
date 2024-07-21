const app = new Object(); //This is singleton object
const app2 = {} //This is non-singleton object


app.id = 123,
app.name = "Spdcy"
app.user = "Rahul"
app.isLogin = false;



const regularUser = {
  email : "some@gmail.com",
  fullname : {
    firstName: "Reeturaj",
    lastName: "Kumar"
  },
  age: 20
}


console.log(Object.keys(regularUser))//extracting the key from object
console.log(Object.values(regularUser))//extracting the value from object
console.log(Object.entries(regularUser))//presenting the everthing in seprate srray with their repectiva value and key
console.log(regularUser.hasOwnProperty("email"))// using the HasOwnProperty u can chack the value is vaialabel in object or not
console.log(regularUser.fullname.firstName)
console.log(app)