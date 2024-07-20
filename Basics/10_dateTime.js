let myDate = new Date();

console.log(myDate.toString());
// here we printing the todays date ,day name and time  
// Output : - Sat Jul 20 2024 20:46:41 GMT+0530 (India Standard Time)


console.log(myDate.toLocaleDateString());
//This console is giving the todays date in better format
// Output : - 20/7/2024


console.log(myDate.toDateString());
// This console is giving the day name and date 
// Outpu : - Sat Jul 20 2024



// here we are providing the specific input in date 
let date = new Date(2024,5,5,5,7)
console.log(date.toLocaleString())

// here 2024 : - year 
// here First 5 denotes the : - Month
// here Second 5 denotes the : - Date
// here Third 5 denotes the : - Time
// here 7 denotes to the : - Minute





// +++++++++++++++++++++++++++ TIMESDESIGN ++++++++++++++++++++++++++//
let myTime = new Date();
console.log(myTime)
console.log(myTime.getMonth()+1);
console.log(myTime.getDay());
