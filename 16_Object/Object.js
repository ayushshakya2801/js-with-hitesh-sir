// +++++++++ Objects in js 

// Object literals
const mySymbol = Symbol("Key1")
const JsUser = {
    name: "Ayush",
    age : 20,
    mySymbol :"mykey1",
    Location : "Noida",
    email : "shakyaayush31@gmail.com",
    Domain : "Softwarengineer"

}

// console.log(JsUser.name);
// console.log(JsUser["Domain"]);
// console.log(JsUser.mySymbol);
 JsUser.email="shakyayaush31@hmaol.com"
// Object.freeze(JsUser)  // freeze ka mtlb hota hai ki koe bhi value change nhi hogi agar freeze ke neche likhege to 
 JsUser.email="ajayhgdg@gmail.com"
 console.log(JsUser);
 

 JsUser.greeting = function() {
    console.log("hello , ayush");
 }

JsUser.greetingtwo = function() {
    console.log(`hello users , ${this.Domain}`);
    
}
 console.log(JsUser.greeting());
 console.log(JsUser.greetingtwo());
 
 