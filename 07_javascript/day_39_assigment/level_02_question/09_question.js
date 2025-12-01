let user = {

name: "Yogesh",
age:22,
email:"hss@.h"
}

//Object.freeze(user) //freeze the object and after that we cant change that object value and not able to add any new value

Object.seal(user);
user.name = "yogs";//we can change the value of the existing ones but cant add the new value in the object

console.log(user);
