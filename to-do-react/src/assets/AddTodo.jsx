import React, { useState } from 'react';

function AddTodo({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
