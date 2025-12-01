let obj = {
    user : {
        name :"Yogesh",
        address : {
            city : "Deesa"
        },
    },
};

obj.user.address.city // to not write every time we use destructuring

//destructruing method 

let {city} = obj.user.address;




