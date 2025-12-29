// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.


let obj = {
    name : "Yogesh"
}

function greet (){
      console.log("Hello" , this.name);
      
}

let greet1 = greet.bind(obj);
greet1(); // bind ek naya function return karta hai jisme this permanently fix ho jata hai.Ye function turant execute nahi hota, balki baad me jab chahe tab call kiya ja sakta hai.