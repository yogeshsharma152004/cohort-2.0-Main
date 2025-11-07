//Qustion:7

// let age = 25;

// if(age >= 18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
    
// }

let age = prompt("Write Your age");


if(age === null){
    console.error("You cancelled it")
}
else{
    if(age.trim() === ""){
        console.error("Please enter the age")
    }
    else{
        age = Number(age);

        if(isNaN(age) ){
            console.error("Please enter the number")
        }
        else{
            if(age < 0){
                console.error("Not Valid")
            }
            else if(age >= 18){
                console.log("You are Eligible")
            }
            else{
                console.log("You are not Eligible")
            }
        }
    }
}