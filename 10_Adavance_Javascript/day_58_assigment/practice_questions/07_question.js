// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.


let name = {
    name : "Yogesh"
}

function introduce(city , role){
       console.log(`My name is ${this.name} and i'm living in  ${city} and my role is in this compney is  ${role}`);
       
}

introduce.apply(name , [ "ahemdabad" , "devloper"])

// in call we give the first value of this and then seocnd value write as normal using coma but when we use the apply first value we give the this and other rest of all value will put inside the array