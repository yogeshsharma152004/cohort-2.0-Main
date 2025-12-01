let counter = 0;

for (let i=1; i<6; i++){
    let num = +prompt("Enter Number");
    if(num >= 0) counter++;
}

console.log(`total positive number is ${counter}`)