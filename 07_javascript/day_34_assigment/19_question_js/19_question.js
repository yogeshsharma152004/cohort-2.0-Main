let balance = 1000;
let flag = false;
let counter = 0;
while(balance > 0 && counter !== 3){
    let withdraw = +prompt("Enter withdrwal amount");
    counter++;

    if(withdraw <= balance) balance -= withdraw;
    else{
         flag = true;
         break;
    }
}

if(flag === true){
    console.log("Insufficent amount");
}

console.log(`Balance: ${balance}`)