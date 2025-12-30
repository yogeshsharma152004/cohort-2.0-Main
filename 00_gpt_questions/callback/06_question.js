// Nested callbacks use karke yeh flow banao:

// Login user

// Fetch profile

// Fetch posts

// Fetch comments

function loginUser(username, password, cb) {
  console.log("enter user login detail..");

  setTimeout(() => {
    cb({ username, password });
  }, 1000);
}
function fetchProfile(user, cb) {
  setTimeout(() => {
    console.log("User profile fetching ....");
    cb({ name: user.username });
  }, 2000);
}
function fetchPosts(profile, cb) {
  setTimeout(() => {
    console.log("Fethcing user posts ...");
    cb(["post1", "post2", "post3"]);
  }, 3000);
}
function fetchComments(posts, cb) {
  setTimeout(() => {
    console.log("Fetching user comments ...");
    cb(["nice", "beautiful", "wow"]);
  }, 4000);
}

loginUser("yogesh", "abc@123", (user) => {console.log(user);
 fetchProfile(user, (profile) => { console.log(profile);
    fetchPosts(profile, (posts) => { console.log(posts);
      fetchComments(posts, (comments) => { console.log(comments);
        console.log("User Profile is Fetched ✅");
      });
    });
  });
});
