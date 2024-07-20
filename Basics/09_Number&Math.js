// ++++++++++++++++++++++++++++++++ NUMBERS +++++++++++++++ //



const score = 400;
// here we know its number but it is not priniting with output withe their type

const balance = new Number(100);
// here we are decalred its number and when we printing its printing the value with thir data types

console.log(score);
console.log(balance);


console.log(balance.toString());
// here we are converting Number to string

console.log(balance.toFixed(2));
// basically this tofixed methood used in E-commrec webiste to defining the rate of the project

const otherNumber = 123.8899097;
console.log(otherNumber.toPrecision(4));
// here the thing is whe we are using thi methood topricision its depnond on the our given vlue .here we give the 4 value here so its only implement in our given value not others 



const otherNumber2 = 1000000000;
console.log(otherNumber2.toLocaleString('en-IN'));
//so basically toLocaleString converts the number into possible orentation which based on the given country.








// ++++++++++++++++++++++++++++++++ MATHS +++++++++++++++ //




console.log(Math.abs(-4));
// here the abs means absolute value which on only converts the negative to positive not positive to negative.



console.log(Math.round(40658.5422));
// here round means we are just using round value of given decimal integer



console.log(Math.min(3,5,6,8,2,5,9,1,0));
//using this min methood we are finding the minimum value present in the array


console.log(Math.max(7,5,6,9,0,2,5,8,0,4,));
//here using the max methood we are finding the max value present in the array 



console.log(Math.random());
// here using the random methood we can display the random value in 0 to 1 and its always print the decimal value



const min = 9 ;
const max = 19;
console.log(Math.floor(Math.random() * (max-min +1)) + min)
// here we are using the two methood first one is math.floor which give the lowest value of decimal means if the value is 4.2 is its print 4 and its 4.9 then its also print 4 and the mathrandom  genrate the random value now we are using basic math rool to the output must belong to min and max value 