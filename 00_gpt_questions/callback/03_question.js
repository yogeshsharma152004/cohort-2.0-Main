// Ek function delayedMessage(msg, callback) banao:

// 2 second baad msg print ho

// uske baad callback chale aur bole "Message delivered"

function delayedMessage(msg, cb){

    setTimeout(() => {
         console.log(msg);
         cb()
         
    }, 2000);

}

delayedMessage("Hello How are you?" , function(){
    console.log("Message deliverd");
    
})