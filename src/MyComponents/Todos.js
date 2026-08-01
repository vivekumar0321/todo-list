import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let mystyle = {
    minheight: "70vh",
    margin: "40px auto"
  }

  let initTodo;
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length === 0 ?
        "No todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr />
            </>
          )
        })
      }
    </div>
  )
}
export default Todos
