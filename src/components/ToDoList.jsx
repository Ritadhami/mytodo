import ToDoitem from './ToDoitem';

function ToDoList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <div className='Todo-list'>
      <h3>Your Task</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task, index) => (
          <ToDoitem
            key={index}
            index={index}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;

