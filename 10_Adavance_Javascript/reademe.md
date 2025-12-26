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




