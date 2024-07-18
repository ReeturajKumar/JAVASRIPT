console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true


console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false



console.log("2" === 2); //false
console.log("2" > 1); // true
console.log("02" > 1); //true



//Explanation
// 1. null is converted to 0 for numerical comparison, so 0 > 0 is false.
// 2. null is only equal to undefiend so its false
// 3. so for a numeric comaprision its converted into number to its greater or equal to 0
// 4. undefiend is also equal to null its is false
// 5. its is converted into NaN form so its is false 
// 6. its is converted into NaN form so its is false 
// 7. there data types are different so its is false
// 8. for a number comparision it is converted into string to number and 2 is greater than 1 so its is true .
// 9. for a number comparision it is converted into string to number and 02 is greater than 1 so its is true .