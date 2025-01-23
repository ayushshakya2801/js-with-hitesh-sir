

const myNum = [  1,2,3,4,5,6,7,8,9,10 ];
const Addnum =  myNum.map((num)=> 
     { return num + 10})  // reutrn is used to return the value of the function it is used in
console.log(Addnum);

// Output:

// Chening method  multiple method in one line code

 const myArry = [  1,2,3,4,5,6,7,8,9,10 ];
const newArry = myArry
                .map((num) => num *10)
                .filter((num) => num >70)
                .map((num) => num + 1)

console.log(newArry);

// Output:


// accumalator method

 const myCourse = [  
    { name : "java", price : 100},
    { name : "python", price : 200},
    { name : "javascript", price : 300},
    { name : "c++", price : 400},
    { name : "c#", price : 500},
    { name : "ruby", price : 600},
    { name : "php", price : 700},
    { name : "c", price : 800},
    { name : "perl", price : 900},
    { name : "swift", price : 1000}
  ];

   const totalamt = myCourse.reduce((acc, item) => acc + item.price, 0)

   console.log(totalamt);
   



// Output:
// 5500

const myshopingcart = [
    { name : "java", price : 100},
    { name : "python", price : 200},
    { name : "javascript", price : 300},
    { name : "c++", price : 400},
    { name : "c#", price : 500},
    { name : "ruby", price : 600},
    { name : "php", price : 700},
    { name : "c", price : 800},
    { name : "perl", price : 900},
    { name : "swift", price : 1000},
    { name : "swift", price : 1000}
  ];

    const totalprice = myshopingcart.reduce((acc, item) => acc + item.price, 0)
    console.log(totalprice);
    