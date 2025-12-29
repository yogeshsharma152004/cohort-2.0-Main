// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// ---

function getUser(username , cb){
    setTimeout(function(){
        cb({id:1245 , username:"yogesh"})
    },1000)
}

function getUserPosts(id , cb){
   setTimeout(function(){
      cb(["huhuh" , "ljjhaggd" , "tea post"] )
   },2000)
}

getUser("yogesh" , function(val){
     getUserPosts(val.id , function(allposts){
         console.log(val.username , allposts);
         
     })
})