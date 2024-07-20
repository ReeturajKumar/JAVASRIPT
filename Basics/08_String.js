const name = "Rutu";
const name2 = "Kumar"


console.log(name + name2); 
// this process is called as concat process

//there are two methoods of writing sentence in string

//1 methood
console.log("My name is " + name + name2 + " and i am learning javascript");

//2. methood
console.log(`Hello my name is ${name + name2} and i am learning javascript`);

// In a modern javascript format and according to development point of view first methood is not correct . 1 and 1 both are giving the same output but first one doest have proper structure and 2one have proper structure so choose always 2 methood while writing sence in string





const game = "Pubg"; 
// 1 methood of creating string (here we are creating simple  string)

const game2 = new String("Pubg"); 
// Second methood of creating string (here we are creating stringf using object)



console.log(game2); 
// printing the value with their rtype of data type

console.log(game2[0]); 
// finding the the value of char just using index number

console.log(game2.__proto__); 
// accessing the all methoods using thi proto

console.log(game2.length) 
// finding the length of the string

console.log(game2.charAt(2)) 
// finding the char value using index number

console.log(game2.indexOf("b")) 
// finding the index value of char


const newString = game2.substring(0,2)
// here we are printing the charctors using substring and the  )the charector is first and 2 is last buth 2nd char cant be view show its shows on Ui or terminal 0,1 char value
console.log(newString);


const newString2 = game2.slice(0,2)// in this methood we are printing only that that which is mention here  ist working like substring methood
console.log(newString2);



const newString3 = game2;
console.log(newString3.trim());
// the trim methoodd removes the all extra spaces from string



const game3 = new String("https://google*.com");
console.log(game3.replace('*',''));
// replace methood remove the unwanted things from string .

console.log(game3.includes('hello'));
//replace methood check the string is the given value is persent in srtring or not


const game4 = new String("Hello hiii jhkjsdbbs siodfif");
console.log(game4.split(' '));
//so split methood convert the string into array and print it