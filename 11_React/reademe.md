# Day 67 – Introduction to React (JavaScript Foundations)

Today’s session was a preparation step before starting React. We revised some core JavaScript concepts that are extremely important for understanding and working with React efficiently.

---

## 📌 Topics Covered

### 1️⃣ JavaScript Destructuring
- Learned how to extract values from objects and arrays easily.
- Helps in writing cleaner, shorter, and more readable code.
- Very commonly used in React props and state handling.

---

### 2️⃣ Module JavaScript (Import & Export)
- Understood why modular code is important in modern frontend development.
- Learned how JavaScript files communicate with each other using modules.

---

### 3️⃣ Default Export
- Used when a file exports only one main value.
- Can be imported with any name.

---

# Day 68 – Basics of React

Today’s class was an introduction to React and how it works at a fundamental level.

## What I Learned Today

- React is a JavaScript library used to build frontend user interfaces
- React was created by Facebook to solve performance and re-rendering issues
- Difference between Library and Framework
  - Library focuses on a specific task
  - Framework provides a complete development environment
- Difference between React and ReactDOM
  - React handles UI logic
  - ReactDOM is responsible for rendering UI to the DOM
- How React works under the hood
- Used React CDN inside an HTML file to understand core React concepts
- Created multiple JavaScript files and connected them using import and export
- Understood how React, ReactDOM, HTML, CSS, and JavaScript work together

---

# Day 69 – React Folder Structure & Vite Introduction 🚀

## Overview
In this session, I learned how a real React project is created and structured using **Vite**.  
Before writing React components, we focused on understanding the tooling and architecture behind a React application.

---

## Topics Covered

- Difference between **JavaScript (JS)** and **JSX**
- What is a **bundler** and why React needs it
- Introduction to **Vite** (fast React bundler)
- Creating a React project using Vite
- Understanding the complete React folder structure
- Role of `main.jsx`, `App.jsx`, and `index.html`
- What is **rafce** snippet and why it is used
- Running React app using `npm run dev`

---


# Day 70 – React  & Virtual DOM 🚀

## Overview
This session focused on revising React basics and understanding how React improves performance using the **Virtual DOM**.  
We also learned about code quality tools and project structure used in real-world React applications.

---

## Topics Covered

- Revision of previous React concepts
- Difference between **Real DOM** and **Virtual DOM**
- How React handles UI updates efficiently
- Understanding re-rendering problems in traditional DOM
- Introduction to **ESLint**
- Purpose of **.gitignore** file
- Creating multiple React components
- Importing and exporting components between files

---





## 🚀 Day 71– Tailwind CSS in React

Today I learned about **Tailwind CSS** and how it is used in **React applications** to build fast, clean, and scalable user interfaces.

---

## 📌 What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework** where we style elements using predefined utility classes directly in HTML or JSX instead of writing custom CSS repeatedly.

---

## ❓ Why Use Tailwind CSS?

- Faster UI development
- No need to write separate CSS files
- Consistent design system
- Easy responsiveness and customization
- Perfect fit for component-based frameworks like React

---

## 🧠 What I Learned Today

- How Tailwind CSS works internally
- Difference between traditional CSS and utility-first CSS
- Using Tailwind via CDN in normal HTML projects
- Installing and configuring Tailwind CSS in a React project
- How Tailwind classes are used inside JSX

---

## ⚛️ Tailwind in React

- In React, Tailwind is **installed**, not used via CDN
- Tailwind works seamlessly with JSX
- Styling stays close to the component logic
- Helps in building reusable and clean components

---

## 📅 Day 72 – More into React (JSX & Props)

### 📌 What I Learned
In this session, I learned how JavaScript logic works directly inside JSX and how data flows between components using props.

### 🧠 Key Concepts Covered
- Writing JavaScript inside JSX using `{}`  
- Passing data from parent to child components using **props**  
- Understanding **props drilling**  
- Using one reusable component with different properties  
- Making UI dynamic by changing props instead of DOM manipulation  

### 🔍 Important Takeaways
- JSX allows mixing JavaScript expressions directly inside UI  
- Props help in making components reusable and flexible  
- A single component can behave differently based on the props passed  
- React follows a **data-driven UI approach**, not manual DOM updates  

---

# Day 73 – React Conditional Rendering & Events

## 📌 What We Did Today
- Revised concepts from the previous React class
- Built a Navbar using **props drilling**
- Learned how to manage UI dynamically using **conditional rendering**
- Implemented event handling in React

## 🧠 Topics Covered
- Conditional Rendering in React
- Ternary Operator for UI control
- Props Drilling (passing data through components)
- Event handling in React
  - onClick
  - Calling functions inside JSX
- Creating and passing functions as event listeners

---

# Day 74 – React useState & State Management

## 📌 Overview
Today we learned one of the most important concepts in React — **Hooks**, specifically the `useState` hook, and how React manages state inside function components.

## 🧠 What are Hooks?
Hooks are special functions provided by React that allow us to use features like state and lifecycle methods inside **function components**.

`useState` is the most commonly used hook for managing state.

## 🔄 What is State Management?
State management means handling:
- Current state (how UI looks now)
- Previous state (how UI looked before)
- Future state (how UI will look after changes)

In React, **state defines the UI behavior**.

## ⚙️ Understanding useState
- `useState` returns two values:
  1. Read-only value (current state)
  2. Write-only function (to update state)

---



