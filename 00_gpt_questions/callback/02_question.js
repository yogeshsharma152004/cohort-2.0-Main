// Q2️⃣ Calculator with Callback

// Ek function calculate(a, b, operationCallback) banao:

// operationCallback add / subtract / multiply kare

// result print ho


function calculate(a,b,operationCallback){

     

      operationCallback(a,b)
      
      
}

calculate(5,8,function( a , b){
     
 console.log("add :" , a+ b);
  console.log("sub :" , a- b);
   console.log("mul :" , a* b);
 

  
    
  
})