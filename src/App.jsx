import { useState } from 'react'
// import AddTodo from './components/AddTodo'
import Priority from './components/PriorityFilter'
import Status from './components/Status';
import ToDoList from './components/ToDoList';
import AddTodo from './components/AddTodo';


function App() {
  const [tasks,setTasks]= useState([]); //store all task 
  
  
  // Add new task 
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete a task by index 
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Toggle complete
    const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status =
    newTasks[index].status === 'Pending' ? 'Completed' : 'Pending';
    setTasks(newTasks);
  };

  // Edit a task 
    const editTask = (index, updatedTitle, updatedPriority) => {
    const newTasks = [...tasks];
    if (!newTasks[index]) return; // safety check
    newTasks[index] = {
    ...newTasks[index],
    title: updatedTitle,
      priority: updatedPriority
    };
    setTasks(newTasks);
  };
 
  
  return(
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white/90 rounded-2xl shadow-xl border border-gray-200">


       {/* for input and buttons  */}
      <div className='add-todo-card'>
        <AddTodo addTask={addTask}/>
      </div>

      {/* for side card :Status and priority  */}
     <div className='side-cards'>
      <Status/>
      <Priority/>
      </div>

      {/* for to-do list card  */}
      <div className='Todo-list'>
        <ToDoList
        tasks = {tasks}
        deleteTask={deleteTask}
        toggleComplete= {toggleComplete}
        editTask={editTask}
        />

      </div>

    </div>

  );
}

 

export default App;
