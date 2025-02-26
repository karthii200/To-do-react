import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTaskCompletion, editTask, deleteTask }) {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
