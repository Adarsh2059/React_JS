# React Todo App

A simple and efficient Todo Application built using React that helps users manage daily tasks. This project demonstrates the implementation of **React Context API** for global state management and **Local Storage** for data persistence.

## Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Persistent storage using Local Storage
* Global state management using Context API
* Responsive and user-friendly interface

## Technologies Used

* React.js
* Context API
* Local Storage
* JavaScript (ES6+)
* HTML5
* Tailwind CSS

## Concepts Implemented

### Context API

The Context API is used to manage the todo state globally across multiple components without prop drilling. It provides:

* Centralized state management
* Easy access to todos from any component
* Cleaner and more maintainable code structure

### Local Storage

Local Storage is used to persist todo data even after refreshing or closing the browser.

#### Saving Data

```javascript
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

#### Retrieving Data

```javascript
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos && todos.length > 0) {
    setTodos(todos);
  }
}, []);
```

## Project Structure

```text
src/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── context/
│   └── TodoContext.js
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd react-todo-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## Learning Outcomes

Through this project, I learned:

* React Hooks (`useState`, `useEffect`, `useContext`)
* Creating and using Context API
* Managing global application state
* Storing and retrieving data from Local Storage
* Building reusable React components
* State persistence across browser sessions

## Future Enhancements

* Task categories
* Due dates and reminders
* Search and filter functionality
* Dark/Light theme toggle
* Backend integration with database

## Author

Developed as a React learning project to understand Context API and Local Storage integration.
