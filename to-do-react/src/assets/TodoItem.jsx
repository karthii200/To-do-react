import React, { useState } from 'react';

function TodoItem({ task, toggleTaskCompletion, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      editTask(task.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span onClick={() => toggleTaskCompletion(task.id)} className="task-text">
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
