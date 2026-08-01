// App.js - Without HomePage
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error('Error loading todos:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log('✅ Todos saved to localStorage:', todos.length);
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  }, [todos]);

  const onDelete = (todo) => {
    if (!window.confirm(`Delete "${todo.title}"?`)) {
      return;
    }
    const updatedTodos = todos.filter((e) => e.sno !== todo.sno);
    setTodos(updatedTodos);
  };

  const addTodo = (title, desc) => {
    if (title.trim() === '' || desc.trim() === '') {
      alert('Both Title and Description are required!');
      return;
    }
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      completed: false
    };
    setTodos([...todos, myTodo]);
  };

  const toggleComplete = (sno) => {
    setTodos(todos.map((todo) =>
      todo.sno === sno ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearAll = () => {
    if (todos.length === 0) return;
    if (window.confirm('Delete all todos?')) {
      setTodos([]);
    }
  };

  return (
    <Router>
      <Header title="My Todos List" searchBar={true} />

      <Routes>
        {/* Home Route - Direct inline content */}
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />

              {todos.length > 0 && (
                <div className="container my-2">
                  <button className="btn btn-danger btn-sm" onClick={clearAll}>
                    🗑️ Clear All ({todos.length})
                  </button>
                </div>
              )}

              <Todos
                todos={todos}
                onDelete={onDelete}
                toggleComplete={toggleComplete}
              />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;