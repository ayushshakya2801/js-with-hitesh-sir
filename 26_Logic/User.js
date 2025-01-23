

 const userLogin = true;
//  const Debitcard = True;
 const Debitcard = false;

 const accloginforgoogle = true;
 const accloginforemail = false;

 if (userLogin && Debitcard) { //and opreator
    console.log("U are eligible for Shopping")
 }
 if (accloginforemail || accloginforgoogle) {   // aur opreator
    console.log("Login User")
 } 
 else {
    console.log("not eligible for shopping ");
    
 }