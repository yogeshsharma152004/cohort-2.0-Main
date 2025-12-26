//=>Qusetion 2. Imagine you have 5 users , First think how you would manage them without using class then convert the same logic using a class and observe how the code beomes cleaner , write the code for both approches

//witout class 5 user

let user1 = {
  name: "Yogesh",
  emial: "usjjs@gamil.com",
  login: function () {
    console.log("user logged in");
  },
};

let user2 = {
  name: "Yogesh",
  emial: "usjjs@gamil.com",
  login: function () {
    console.log("user logged in");
  },
};

let user3 = {
  name: "Yogesh",
  emial: "usjjs@gamil.com",
  login: function () {
    console.log("user logged in");
  },
};

let user4 = {
  name: "Yogesh",
  emial: "usjjs@gamil.com",
  login: function () {
    console.log("user logged in");
  },
};

let user5 = {
  name: "Yogesh",
  emial: "usjjs@gamil.com",
  login: function () {
    console.log("user logged in");
  },
};


//for class

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
        
    }
    loggedIn (){
   console.log("User logged in"); 
}
}

let u1 = new User("yogesh" , "djhjd");
let u2 = new User("megs" , "dsdfggdg");
let u3 = new User("sarthak" , "ghghjhjd");
let u4 = new User("dhruv" , "kkgj");
let u5 = new User("Trushant" , "nhnsa");