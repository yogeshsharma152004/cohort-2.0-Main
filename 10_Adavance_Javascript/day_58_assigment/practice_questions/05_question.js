// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.
class Vehicle{
    constructor(type , wheels){
         this.type = type;
         this.wheels = wheels;

        //  this.describe =  function(){
        //     console.log(`type of  car is ${this.type} and wheels is ${this.wheels}`);
            
        //  } when we create the method inside the constructor then it will not create in the prototype or in shared memory it will create for indiviual and outside the protitype memory
    }
}

//=> prototype will create the shared memory so al object we created  will take share the same data from the shared memory and it will store in the prototype of the objects we created not the outside of the object 

Vehicle.prototype.describe = function(){
            console.log(`type of  car is ${this.type} and wheels is ${this.wheels}`)} 

let c1 = new Vehicle("super car" , "super advance");
let c2 = new Vehicle("f1 racing car" , "advance")
let c3 = new Vehicle("normal car" , "normal")