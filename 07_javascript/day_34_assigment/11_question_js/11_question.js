let attempts = 0;
let open = false;
let Correctpassword = "Yogesh";
let password = prompt("Enter Your Password");
attempts++;

if(password === Correctpassword) open = true;
while(password !== Correctpassword){
    if(attempts === 3){
        console.error("Account Locked");
        break;
    }
     password = prompt("Enter Your Password");
     if(password === Correctpassword) open = true;
      attempts++;
}     

if(open === true) console.log("Account Opened")