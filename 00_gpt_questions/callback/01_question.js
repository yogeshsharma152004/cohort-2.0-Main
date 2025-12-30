// Q1️⃣ Simple Callback

// Ek function greet(name, callback) banao:

// name ko print kare

// phir callback ko call kare jo "Welcome!" print kare 2 sec ke baad 

// 👉 Goal: callback ka basic flow samajhna


function greet(name , cb){
    console.log(name);
    setTimeout(() => {
          cb();
    },2000);
    
     
}

greet("yogesh" , function(){
    console.log("Welcome");
    
})