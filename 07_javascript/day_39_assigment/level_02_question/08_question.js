let names = ["om" , "meg" , "rahul" , "dhruv" ,"ani"];


//=>  some method if any one value or condition will satisfy then it will return true 
let ans = names.some(function(val){
      return val.length > 3;
});

console.log(ans);

//=>every method will check that if all the value or conditon will true the return true if any one will not pass the conditon then return false

let ans1 = names.every(function(val){
      return val.length > 3;
});

console.log(ans1);