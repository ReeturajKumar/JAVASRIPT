// Types of memory
//  Stack : - In a primitive data types we used stack memory
//  (here we are using the copy of declare value)
//  Heap  : - In a Non-Primitive data types we used Heap memory
//  (here we are using the refernce of declare value)


// Examples of stack 
let namee = "Youtube"; // here we are declare the name value
let name2 = namee;  // here we are initilizing the name in another value
name2 = "Facebook"; // here before printing we change the the another value so ts doest effect the namee vale 
console.log(namee) // here its print the namee value
console.log(name2) // here its printr the change variable value line 42 value



let user = {
  email : "reetu@gmail.com",
  age : 19,
  nam : "rutu",
}
console.table([user]); // here we are printing the value from user array using table methood that means its show the data in table format



let user2 = user; // here we are assuming the value of a = b
user2.email = "rutu@gmail.com"; // here we just change the value of email in a & b
console.log(user2.email); // here we are printing the change value
console.log(user.email); // here we are printing the change value