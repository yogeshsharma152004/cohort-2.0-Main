// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.


let laptop = {
    brand: "HP",
    price:56000,
    start : function (){
        console.log("Laptop satrted");
        
    },
    increase: function (){
          this.price = this.price + (this.price * 10 /100)
    }
}

laptop.increase()
console.log(laptop.price);



//for the 10 laptops we have to write the 10 times objects like laptop 1,2,3... so better way is to write that is using class and consturctor that will optimize our code