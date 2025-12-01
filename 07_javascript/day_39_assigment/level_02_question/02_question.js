function pure(a,b){
    console.log(a+b);
    
}

pure(1,2);
pure(1,2);

//////////

let global = 0;
function impure(a){
    global++;
    console.log(a + global);
    
}

impure(2);
impure(2)