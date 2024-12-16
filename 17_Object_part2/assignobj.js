// How to merge Object in js 

 const num_1 = {a:1,b:2};
 const num_2 = {c:1,d:2};
 const num_3 = Object.assign({} , num_1, num_2)  // using assing
 // const num_4 = {...num_1 , ...num_2}  // using spred preator
//  console.log(num_4);
 
 

const Instagram = {
    user_name : "ayushshakya2801",
    flowers : "786",
    facebook_ac : true
 }

  const user_Details = [
    {
        user : 2,
        passwordi : 16263781,
    },
    {
        user : 7,
        passwordi : 162678781,
    },
    {
        user : 8,
        passwordi : 1626387781,
    }
  ]
   
   user_Details[2].passwordi
//   console.log(Instagram);
  console.log(Object.keys(Instagram));   // apne object ki keys find krna  = [ 'user_name', 'flowers', 'facebook_ac' ]
  console.log(Object.values(Instagram)); // value find  = [ 'ayushshakya2801', '786', true ]
  console.log(Instagram.hasOwnProperty(`flowers`)); // yai  check karta hai ki yai key ya value hai hamare object mai ya nhi 
  
  console.log(Object.entries(Instagram)); 
//    output = [
//     [ 'user_name', 'ayushshakya2801' ],
//     [ 'flowers', '786' ],
//     [ 'facebook_ac', true ]
//   ]
  
  
  