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
// console.log("A : -",myArr)
const myArr4 = myArr.slice(1,3);
console.log(myArr4);
console.log("B : - " ,myArr)
//in a slice methood we just remove the value which is given in rhe range between of slice methood and this process change the value in stack means in copy of an array



//Splice methood
const myArr5 = myArr.splice(1,3);
console.log(" C : - " ,myArr5)
console.log(myArr);
//in a splice methood we remoe the all value from array which is give between the range of splice methood and this process changing the value in heap means in actual array 


//creation of an array
const marvel = ["Sp", "Ir", "Th", "Dr"];
const dc = ["Bman", "Sman"];

const all = marvel.concat(dc);
console.log(all)
//this concat methood have some limitation in real world appliication so dont use this methood in big project or real world application


// another methood of adding two array in one array 
const all2 = [...marvel,...dc]
console.log(all2)
//this methood is called as spread methood which spread the evry single element of an array and add in one array and display it





// arrays different format
const example = [1,2,3,4,[5,6,7],9,0,2,[2,3,4,[6,8,9[9,9]]]];
const example2 = example.flat(Infinity);
console.table(example2)
// like we have an array and there are many sub array under the array so we use flat methood its display all the array in one array and simplified that and flat methood take a depth so define how much depth u want the value for a simple use infinity that help you and nood to worry about to count the subarry



console.log(Array.isArray("Rutu"));
console.log(Array.from("Rutu"));
// so basically in a first console we are checkin is this is array or not and in a second console we just collect the data and convert it into array .



let score= 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score,score2,score3))
