//=>Question 1: Create a car with the following :
//brand , speed , a drive method that pritns the car brand and speed


//=>Question 2 : Create two diffent car objects from the same class and verify that thier data is diffrent 

class Car{
    constructor(brand , speed){
        this.brand  = brand;
        this.speed = speed;
    }
    drive(){
     return this.brand + "-" + this.speed;
      
    }
}

let car1 = new Car("Feraari" , 300);
let car2 = new Car("BMW" , 280);