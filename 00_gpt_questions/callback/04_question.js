// 4️⃣ User Data Simulation

// Functions banao:

// getUser(id, callback)

// getPosts(userId, callback)

// Flow:

// User fetch karo (2 sec delay)

// Us user ke posts fetch karo (2 sec delay)

function getUser(id, cb) {
  console.log("user detail...");

  setTimeout(() => {
    cb({ id: id, name: "yogesh" });
  }, 2000);
}

function getPosts(userId, cb) {
  console.log("post  loading for userId...", userId);

  setTimeout(() => {
    cb(["post1", "post1", "post3"]);
  }, 2000);
}

getUser(15, function (user) {
  getPosts(user.id, function (posts) {
    console.log("userDetail", user);

    console.log("posts", posts);
  });
});
