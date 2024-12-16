// +++++++ Array part 2
 const myHeros = ["Arjitsingh","Shradha","Akshay","Sumit"]
 const myYoutuber =["Mrindianhacker","carryMinati","TechBurner","BB ki vines "]

//  myHeros.push(myYoutuber)   yai dono array ko add karke dekhta hai
//  const allHeros = myHeros.concat(myYoutuber)     // yai bhi same whi kam karta hai
// console.log (allHeros)


// Sprite methord 
// + try another mathord  


//  mostly sabhi yahi tarika use karte ahi 
// const all_persons = [...myHeros , ...myYoutuber]
// console.log(all_persons)    

const mysubArray = [5,6,7,[6,7,8],9,7,[6,4,3],27,29]  
const allArray = mysubArray.flat(Infinity) // eshme hm all array type kr karte hai  like array ke andar ho to ush case mai yai karte hai
console.log(allArray);
 
console.log(Array.isArray("Hitesh")); // this is not array output = false
console.log(Array.from("Hitesh")); // yha par hm kuch bhi type likaege from hme array mai show karega = [ 'H', 'i', 't', 'e', 's', 'h' ]


const score1 = 300;
const score2 = 900;
const score3 = 8800;
console.log(Array.of(score1, score2, score3));

