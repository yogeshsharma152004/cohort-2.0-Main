let salary= [1000, 2000 , 3000]

let sum = salary.reduce(function(acc , val){
    return acc + val
},0)

console.log(sum);
