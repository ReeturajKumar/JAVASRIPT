// Declaration of an array
const myArr = [1,2,3,4,5];
console.log(myArr[0]);


//Other way of Declaration
const myArr2 = new Array(1,2,3,4,5);
console.table(myArr2);


//adding value in existing array
myArr.push(6)
console.table(myArr)


// removing the last index value 
myArr.pop()
console.log(myArr)


//checking the value is present in array or not
console.log(myArr.includes(6));


//checking the value in which index
console.log(myArr.indexOf(3));


//here we are using the join methood which converts the array into string type data with same value
const newArr = myArr.join()
console.log(typeof newArr);
console.log(myArr);




//Slice methood 
console.log("A : -",myArr)
const myArr4 = myArr.slice(1,3);
console.log(myArr4);
console.log("B : - " ,myArr)
//in a slice methood we just remove the value which is given in rhe range between of slice methood and this process change the value in stack means in copy of an array



//Splice methood
const myArr5 = myArr.splice(1,3);
console.log(" C : - " ,myArr5)
console.log(myArr);
//in a splice methood we remoe the all value from array which is give between the range of splice methood and this process changing the value in heap means in actual array 