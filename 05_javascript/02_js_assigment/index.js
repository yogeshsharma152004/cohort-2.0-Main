//=> 1.Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise

//=> a. Create two numbers a = 10 and b = 3. Perform and log: a + b, a - b, a * b, a / b, a % b.

// let a= 10;
// let b = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);

// <---------------------************----------------------->

//=> b. Write: let x = 5; x = x + 3; Now rewrite the same using +=. Do the same for -=, *=, /=.

// let x= 5;
// x= 3;

// let x = 5;
// x +=3;

// let x = 5;
// x -= 3;

// let x = 5;
// x *= x;

// let x = 5;
// x /= 3;

// console.log(x);

// <---------------------************----------------------->

//=> c. let count = 5;  Use count++ and log value before and after.Repeat for count–.

// yes 
// console.log(count);
// count++;
// console.log(count);

// console.log(count);
// count--;
// console.log(count);


// <---------------------************----------------------->

//=> d. Compare two values: 5 == “5” and 5 === “5”.Observe difference.

// console.log(5 == "5")//non strict cheking because the == only check the value on the both side not the type so it will give the true

// console.log(5 === "5")//strict check it will give the dalse beacuse it will check the type and the value both side 

// <---------------------************----------------------->


//=> e. Check if 10 is greater than 5, less than 20, and equal to 10.

let x = 10;

if(x>5 && x < 20 && x ===10){
    console.log("Aceepted");
} else{
    console.log("Not accepted"); 
}//true answer all the condtition is true

// <---------------------************----------------------->

//=>f. Try logical AND and OR:true && false ,true || false ,!(true)

// <---------------------************----------------------->

//=>g. Predict the result of:(5 > 3 && 10 > 8),(5 > 3 || 10 < 8)

// console.log(5>3 && 10>8); //true because the both side condition is right or true

// console.log(5>3 || 10<8); //true because he one value from the both is correct 

// <---------------------************----------------------->

//=>h. Bitwise (light intro):Evaluate 5 & 1 and 5 | 1.Write result and your observation (no deep explanation needed now).

// <---------------------************----------------------->

// <---------------------************----------------------->


//=>2. Variable Hoisting in JavaScript


//=>a. Predict output of:
// console.log(a);
// var a = 10  //undefined beacuse we can declare the value before initilization in hoisting and it will acess that later but the hoisting will only work in var

// <---------------------************----------------------->

//=> b. Predict output of:
// console.log(b);
// let b = 10//error because we cant declare the value before initilzation in let it will through the error 

// <---------------------************----------------------->

//=> c. Predict output of:
// test()
// function test() { console.log("Hello") } //=>give the hello as output

// <---------------------************----------------------->

//=> d. Try writing a function expression before initialization and call it: // Write what happened and why.
// hello()
// var hello = function() { console.log("Hi") } //=> error because the hello is not function

// <---------------------************----------------------->

//=> e. Write one sentence:
// What gets hoisted? => var get hoisted only
// What does not get hoisted fully? => let abd const

// <---------------------************----------------------->

// <---------------------************----------------------->

//=> 3. Conditional Operators (if, else, else-if, ternary, switch)

//=> a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”
// let age = 15;
// if(age>18){
//     console.log("Adult");  
// }else{
//     console.log("Minor")
// }

// <---------------------************----------------------->

//=> b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”
// let marks = 5;
// if(marks >= 90){
//     console.log("A grade");   
// }else if(marks >= 75){
//     console.log("B grade");  
// }else if(marks >= 50){
//     console.log("C grade"); 
// }else{
//     console.log("Fail"); 
// }

// <---------------------************----------------------->










