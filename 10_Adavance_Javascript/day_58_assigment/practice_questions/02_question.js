// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?


class Employee{
    constructor(name , salary){
           this.name = name;
           this.salary = salary;

    }

    showDetails(){
        console.log(`Employee Name is ${this.name} and salary is ${this.salary}`)
    }
}

let Emp1 = new Employee("Yogesh" , 70000)
let Emp2 = new Employee("Harsh" , 100000)
let Emp3 = new Employee("Jaya" , 150000)

//created three emplyee and that will not affect any other class 
//class is best beaucsr we dont need to over right same things mutiple time that we write in the object and it will optimize our code 
