// Q5️⃣ Order Process (Real Life Example)

// Functions:

// placeOrder(callback)

// prepareFood(callback)

// deliverFood(callback)

function placeOrder(cb) {
  setTimeout(() => {
    console.log("Order placed");
    cb();
  },1000);
}

function prepareFood(cb) {
  setTimeout(() => {
    console.log("Order prepared");
    cb();
  }, 2000);
}

function deliverFood(cb) {
  setTimeout(() => {
    console.log("Food delivered");
    cb();
  }, 3000);
}

placeOrder(() => {
  prepareFood(() => {
    deliverFood(() => {
      console.log("Order Completed ✅");
    });
  });
});
