function num(...nums){
   let sum = 0;

   nums.forEach(function(val){
     sum = sum + val ;
   });
   console.log(sum);
   
}

num(1,2,3,4,5,6,7,8,9,10)


//second method

function num(...nums){
   let sum = 0;

   for(let i=0; i<nums.length; i++){
    sum = sum + nums[i];
    
   }
   console.log(sum)
}

num(1,2,3,4,5,6,7,8,9,10)


//third method


function num(...nums){
  let sum = nums.reduce(function(acc,val){
      return acc + val;
  },0);

  console.log(sum);
  
}

num(1,2,3,4,5,6,7,8,9,10)