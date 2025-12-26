//create an object with two methods , one method with normal function , one method with arrow function , inside both print this and observe the diffrence


let obj ={
    nomral : function(){
        console.log(this);
        
    },
    arrow: ()=>{
        console.log(this);
        
    }
}

obj.nomral() // value is current object
obj.arrow() // value is wondow because it take the value from its parent here the object is parent 