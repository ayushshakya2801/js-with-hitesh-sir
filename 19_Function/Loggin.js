// +++++   show login msg after user login 

function userMsg(username){

return (`${username} just loggin`)

}

  console.log(userMsg("Ayush"));  // show user name Ayush just loggin
  console.log(userMsg(""));  // jsut loggin in =  just loggin



  // check function all calculation price 

   function allitemprice(...num1){    // (...num1) it is  rest opreator and it is also spride opretor depend on your need whenever i use 
      return num1
   }
   console.log(allitemprice(300,800,600))

   


    function sumallitems( ...num2  ){
      return num2 
    }

    console.log(sumallitems(79898,67,78));
    