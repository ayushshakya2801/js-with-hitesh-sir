// for Each loop

 const coding =  ['Js', 'Rubby', 'CPP', 'C','Paython']

  coding.forEach( function (item) {    // function use kiya hai
    console.log(item);   
    
  } )

// arrow function
 coding.forEach( (item) => {   // arrow function use kiya hai 
    console.log(item);
    
 } )


 // 

  const datasub = [

    {
        course : "javascript",
        filename: "js"
    },

    {
        course : "python",
        filename: "py"
    }
 
  ]
  datasub.forEach( (item) => {
  console.log(item.course);
  
  })