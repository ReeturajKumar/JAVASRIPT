if(true){ // block scope
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(a) // 10
  console.log(b) //20
  console.log(c) // 30
}

console.log(a) // not defiend (Block scope)
console.log(b) // not defiend (Block scope)
console.log(c) // 30 (Global scope)
//Global scope :- Outer variable of this barces

for (let i = 1; i <= 10; i++) { // Block scope
  // const element = array[i];
  console.log(i)
}