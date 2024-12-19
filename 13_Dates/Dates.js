  // +++++++++ dates 
const myDate = new Date()
console.log(myDate);
console.log(myDate.toString());   // covert into string 
console.log(myDate.toDateString());  // its prints today date with day and months name = Fri Dec 13 2024
console.log(myDate.toISOString());  // its prints today date =  2024-12-13T13:34:14.763Z
console.log(myDate.toJSON());  // the out is = 2024-12-13T13:38:01.536Z
console.log(myDate.toLocaleString());  // output is = 12/13/2024, 7:08:01 PM
console.log(typeof myDate);  // it is a object 

  
// chooise Random date 

let mycreatedDate = new Date(2024,0,23)
let myseccreatedDate = new Date(2024,14,23)  
let mychcreatedDate = new Date ("2024-11-07") // yai formate hamne "YY-MM-DAY" eshka ulta bhi hoat h "MM-YY-DATE"
console.log(mycreatedDate.toLocaleString()); // output = 1/23/2024, 12:00:00 AM
console.log(mycreatedDate.toDateString());  // output = Tue Jan 23 2024
console.log(myseccreatedDate.toDateString());  // agar months jada dal ko to yai next year mai pahuch jata hai just like = Sun Mar 23 2025

console.log(mychcreatedDate.toLocaleString());  // 11/7/2024, 5:30:00 AM

  
 //current date with time 

 let newDate = new Date();
 console.log(newDate.getMonth()+1); // get months = 12
 console.log(newDate.getDay());  // get today day = 6 friday
 