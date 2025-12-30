# Day 57 – Advanced JavaScript (OOP Basics)

## 📌 Overview
This day marks the beginning of **Advanced JavaScript**, where we started learning the fundamentals of **Object Oriented Programming (OOP)**.  
OOP helps in writing clean, scalable, and maintainable code, especially for large applications.


## 🧠 Topics Covered

### 🔹 Object Oriented Programming (OOP)
- OOP is a programming approach used to structure code in a modular way.
- It helps in managing large codebases efficiently.

### 🔹 Objects
- Objects are used to store related data and functionality together.
- Example use case: storing all details of a person in a single structure.

### 🔹 Classes
- Classes act as **blueprints** for creating objects.
- They allow us to generate multiple instances without rewriting code.

### 🔹 Constructor
- A special function that runs automatically when a new object is created.
- Used to initialize values for each instance.

### 🔹 `this` Keyword
- Refers to the current object that is calling the method.
- Helps access object properties inside class methods.

### 🔹 Prototype (Basic Introduction)
- JavaScript uses prototypes to share properties and methods between objects.
- This helps in memory optimization and reusability.

---

# Day 58 – Advanced JavaScript 

## 📌 Overview
This session focused on revising Advanced JavaScript fundamentals and diving deeper into **prototype**, **`this` keyword**, and **call / apply / bind**.  
The goal was to understand how JavaScript handles shared memory and execution context.

---

## 🧠 Topics Covered

### 🔹 Prototype
- Prototype is a **shared memory mechanism** in JavaScript.
- Used to store common properties and methods.
- Helps avoid duplication and improves performance.
- All objects in JavaScript are connected through a prototype chain.

---

### 🔹 `this` Keyword
- `this` is a **special keyword** whose value changes based on execution context.
- Its value is decided **at runtime**, not at write time.

#### Behavior of `this`:
- Global scope → `this` refers to `window`
- Normal function → `this` refers to `window`
- ES5 function inside object → `this` refers to the object
- ES6 function inside object → `this` refers to `window`
- ES5 function inside ES5 function inside object → `this` refers to `window`
- ES6 function inside ES5 function inside object → `this` refers to the object

---

### 🔹 Call, Apply, and Bind

These methods are used to **manually control the value of `this`**.

- **call()**
  - Immediately invokes the function
  - First argument sets the value of `this`

- **apply()**
  - Same as call
  - Arguments are passed as an array

- **bind()**
  - Returns a new function
  - Does not execute immediately
  - `this` value is permanently bound


---

# Day 59 – Advanced JavaScript (Classes & OOP)

## 📌 Overview
This session focused on Object-Oriented Programming concepts in JavaScript, especially how to structure code using classes, inheritance, and controlled data access.

---

## 🧠 Topics Covered

### 🔹 Class Expression
- A class can be stored inside a variable.
- Works similar to function expressions.
- Useful for flexibility and cleaner code structure.

---

### 🔹 Inheritance
- Inheritance allows one class to **extend** another class.
- The child class can reuse all features of the parent class.
- New features can be added on top of existing ones.
- Helps in building modular, scalable applications.

---

### 🔹 Getter and Setter
- Getters are used to **access** class properties.
- Setters are used to **update** class properties safely.
- Provides better control and validation over data.
- Makes code more readable and maintainable.

---

### 🔹 Practice & Problem Solving
- Solved questions based on previously learned Advanced JS topics.
- Improved understanding of OOP flow and logic building.
- Helped in clearing doubts and strengthening fundamentals.


---

# Day 60 & 61 – Asynchronous JavaScript

## 📌 Overview
These sessions introduced asynchronous behavior in JavaScript and explained how JS handles delayed and background tasks despite being single-threaded.

---

## 🧠 Topics Covered

### 🔹 Synchronous vs Asynchronous JavaScript
- JavaScript is single-threaded.
- Synchronous code runs line by line.
- Asynchronous code runs side-by-side without blocking execution.
- Helps in handling tasks like timers, API calls, and events.

---

### 🔹 Callback Functions
- A callback is a function passed as an argument.
- It executes only after a task is completed.
- Commonly used in asynchronous operations.

---

### 🔹 Callback Hell
- Occurs when callbacks are nested inside callbacks.
- Makes code difficult to read, debug, and maintain.
- Highlighted the need for better async handling solutions.

---

### 🔹 Practice & Problem Solving
- Solved multiple callback-based problems.
- Practiced nested callbacks to understand real-world issues.
- Improved async logic-building skills.

---

### 🔹 Introduction to Promises
- Promises provide a cleaner way to handle async operations.
- Promise States:
  - Pending
  - Fulfilled
  - Rejected
- Promises help avoid callback hell.

---
