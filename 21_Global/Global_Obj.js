//+++ Global and Objects 

let a = 8

if (true) {
    let a = 23
    const b = 5
    var c = 67  
    console.log("inner",a);

}

// console.log(a);
// console.log(b);
console.log(a);



if (true) {
    const username = 'hitesh'
    if (username === "hitesh") {

        const website = " youtube"   // eshe print hoaga 
    console.log(username + website);
    
    }
    // console.log(website);    yaha website print nhi hogi cz yai scope ke bhar hai 
    
}
// console.log(username);  yai bhi nhi hogi bcz yai jo hm print kra kra hai bo scope ke bhar kra rhe h eshka scope { } eshke ndar tak he hota hai