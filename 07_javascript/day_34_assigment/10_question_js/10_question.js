//Qustion:10

let UserPassword = prompt("Write Password");
let Hardcorepassword = "ys1107m";

// if(UserPassword === Hardcorepassword){
//     console.log("Access Granted");
// }
// else{
//     console.log("Access Not Granted");
    
// }

if(UserPassword === null){
    console.error("You canceled it")
}
else{
    if(UserPassword.trim() === ""){
        console.error("Enter the Password")
    }
    else{
        if(UserPassword === Hardcorepassword) console.log("Access Granted");
        else console.log("Access Not Granted");
    }
}