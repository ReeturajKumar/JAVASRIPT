// declaration types in javascript

let score = 33;
console.log(typeof score) // good but not proper way
console.log(typeof(score)) // better way




let card = "33";
console.log(typeof card);  //string

let card2 = Number(card);
console.log( typeof card2); // here we are converting string into number



let card3 = "33abc";
console.log(typeof card3);  // this print the string 


let card4 = Number(card3);
console.log(card4) // this print NaN means not a number but its number



// when we print 1 in boolean value ist print true
// when we print 0 in boolean value ist print false
// when we print "" in boolean value ist print false
// when we print "Reeturaj" in boolean value ist print true