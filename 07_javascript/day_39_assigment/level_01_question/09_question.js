let obj = {
    name: "Yogesh",
    age: 22,
    city: "Deesa",
};

console.log(obj)

//for in loop 

for(let key in obj){
    //console.log(key); //print only keys not the value 
    console.log(obj[key])//give the value of the keys
}