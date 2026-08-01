import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Both fields are must required.");
            return;
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className='container'>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Title </label>
                    <input type="text" className="form-control" name="title" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" name='desc' className="form-control" value={desc} id="desc" onChange={(e) => { setDesc(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}
export default AddTodo
