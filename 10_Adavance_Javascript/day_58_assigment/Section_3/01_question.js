//create a student class whose constructor accepts name and roll number , add method to introduce that prints both values 

//inside the constructor set the values using this. then try removing this and notice what error occurs and why


class Student{
    constructor(name , rollnumber){
        this.name = name;
        this.rollnumber = rollnumber;
        
    }

   introduce(){
    return(this.name + " " + this.rollnumber);
    
   }

}

let st1 = new Student("Yogesh" , 15);