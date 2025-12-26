//create a user constructor function (do not use class syntax)

// function User(){
//     this.name = "dog";
// }

// let user = new User()


//=>Question : Add a login method in two ways 1: first inside constructor , 2: then move to the prototype

//inside construcotr

// function User(){
//     this.name = "dog";
//     this.login = function(){
//         console.log("user logged in");
        
//     };
// }

// let user1 = new User();

//inside prototype

// function User(){
//     this.name = "dog";
    
// }

// User.prototype.login = function(){
//         console.log("user logged in");
        
//     };

// let user1 = new User();


//=>Question: create two user objects and compare their login methods using equality. and explain why the result is true or false 

//agar shared memory me rhaega to true or agar function me indivisula hoga to false 

function User(name){
    this.name = name;
    
}

User.prototype.login = function(){
        console.log("user logged in");
        
    };

let user1 = new User("yogesh");
let user2 = new User("megs");