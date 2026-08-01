// MyComponents/About.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        className="btn btn-outline-primary mb-4"
      >
        ← Back to Home
      </button>

      <h1 className="text-center mb-4">📖 About MyTodoList</h1>
      
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h5 className="text-primary">What is MyTodoList?</h5>
              <p className="lead">
                MyTodoList is a simple and powerful todo application built with React.
                It helps you manage your daily tasks efficiently.
              </p>
              
              <hr className="my-4" />
              
              <h5 className="text-primary">✨ Features:</h5>
              <ul className="list-unstyled">
                <li className="mb-2">✅ Add, Delete, and Complete todos</li>
                <li className="mb-2">💾 Local Storage - Data persists after refresh</li>
                <li className="mb-2">📱 Responsive Design - Works on all devices</li>
                <li className="mb-2">⚡ Fast and Lightweight</li>
                <li className="mb-2">🎯 Task Management Made Easy</li>
              </ul>
              
              <hr className="my-4" />
              
              <h5 className="text-primary">🛠️ Tech Stack:</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">React</span>
                <span className="badge bg-success">Bootstrap</span>
                <span className="badge bg-info text-white">LocalStorage</span>
                <span className="badge bg-warning text-dark">React Router</span>
              </div>
              
              <hr className="my-4" />
              
              <div className="text-center">
                <Link to="/" className="btn btn-primary btn-lg px-5">
                  🚀 Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;