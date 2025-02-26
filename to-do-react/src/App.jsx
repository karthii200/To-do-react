import React, { useState } from 'react';
import TodoList from './assets/TodoList';
import AddTodo from './assets/AddTodo';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Mark a task as complete
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Edit a task
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTask={addTask} />
      <TodoList 
        tasks={tasks} 
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;
