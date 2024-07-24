//Here i am writing a code objects on function
function cartPrice(...num1){ 
  // thise is operator sign in js we can basically implement in cart section where we dont have an idea how much iteams will be come .
  return num1 
}
console.table(cartPrice(200,3000,400,500,600))




//second example
const user = {
  username : "Rutu",
  age : 19,
}
function object (anyobject){
  console.log(`Username is ${anyobject.username} os ${anyobject.age} old`)
}
object(user)


//Third example
const myArray = [300,400,500,600,700,800,900];
function returnArray(getArray){
  return getArray[2]
}
console.table(returnArray(myArray))


//Fourth example
function returnArray(getArray){
  return getArray[2]
}
console.table(returnArray([900,800,700,600,500,500]))