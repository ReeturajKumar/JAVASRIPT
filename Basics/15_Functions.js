// Function means when we wrap of the code into on block and freely use anywhere 


//First methood
// number1,number2 is Parameters
function addNumbers(number1,number2){
  console.log(number1 + number2)
}
addNumbers(100,100);// Arguments




//Second methood
// number1,number2 is Parameters
function addNumbers2(number1,number2){
  let result = number1 + number2;
  return result;
}
const result = addNumbers2(5,5);
console.log(result);



//Third methood
function addNumbers3(number1,number2){
  return number1 + number2;;
}
const result2 = addNumbers3(5,5);
console.log("Result : - " , result2);


//inpur from user 
function loginUser(username){
  return `${username} just logged in`
}
console.log(loginUser("Rutu"));

//taking input using condition
function signinUser(username){ //defining the parameter & we can also defind here the name.
  if(username === undefined){// comparision the two value and their type
    console.log("Please try again") // if condition i stru then print this 
  }
  else{
    return `${username} just signin in` // if condition is fals ethen print this 
  }
}
console.log(signinUser("Rutu")) // callback function

