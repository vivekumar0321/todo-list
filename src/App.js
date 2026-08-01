import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';

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

  // ✅ FIX 2: Save to localStorage whenever todos change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log('✅ Todos saved to localStorage:', todos.length);
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  }, [todos]);

  // ✅ FIX 3: Delete Todo - Use ID comparison, not reference
  const onDelete = (todo) => {
    if (!window.confirm(`Delete "${todo.title}"?`)) {
      return;
    }

    const updatedTodos = todos.filter((e) => e.sno !== todo.sno);
    setTodos(updatedTodos);
    // ✅ localStorage will be updated automatically via useEffect
  };

  // ✅ FIX 4: Add Todo - Remove useEffect from inside
  const addTodo = (title, desc) => {
    // ✅ Validation
    if (title.trim() === '' || desc.trim() === '') {
      alert('Both Title and Description are required!');
      return;
    }

    // ✅ Generate new sno
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      completed: false,
      createdAt: new Date().toLocaleString()
    };
    setTodos([...todos, myTodo]);
  };

  // ✅ FIX 5: Toggle Complete (Optional but good to have)
  const toggleComplete = (sno) => {
    setTodos(todos.map((todo) =>
      todo.sno === sno ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // ✅ FIX 6: Clear All (Optional)
  const clearAll = () => {
    if (todos.length === 0) return;
    if (window.confirm('Delete all todos?')) {
      setTodos([]);
    }
  };

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo} />

      {/* ✅ Optional: Clear All button */}
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
      <Footer />
    </>
  );
}

export default App;