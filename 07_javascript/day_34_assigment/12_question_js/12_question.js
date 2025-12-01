let words = prompt("Enter Words");

let counter = 0;
while(words !== "stop"){
    if(words === "yes") counter++;
    words = prompt("Enter Words");
}

console.log(`total times yes count ${counter}`);
