function abcd(a,b,c){
    console.log(this.name);
    
}

let obj ={
    name:"yogesh"
}

// abcd.call(obj)
// abcd.apply(obj,[1,2,3,4])
let fnc = abcd.bind(obj,1,2,3);
fnc();

