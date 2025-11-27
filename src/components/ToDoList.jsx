import ToDoitem from './ToDoitem';

function ToDoList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <div className='Todo-list p-4'>
      <h3>Your Task</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <div> 
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
       {tasks.map((task, index) => (
          <ToDoitem
            key={index}
            index={index}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))}
        </tbody>
        </table>
        </div>
    )}
  </div>
 );
}
export default ToDoList;

