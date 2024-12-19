// +++ Arrow Function in JS 

  const User = {
    
    user_name : "Ayush",
    price : 299,
    email_id : "shakyaayush31@hmail.com",

    welcomemsg : function(){
        console.log(`${this.user_name}, welcomoe  to website`);
        
    }
 }

 User.welcomemsg()
 User.user_name = "Hitesh"   // another user data 
 User.welcomemsg()
 console.log(User);
 