import ToDoitem from './ToDoitem';

function ToDoList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <div className='Todo-list p-4'>
      <h3>Your Task</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <div className='overflow-x-auto'> 
          <table className='min-w-full border border-gray-300'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='border px-2 py-1'>S.N</th>
                <th className='border px-2 py-1'>Task Name</th>
                <th className='border px-2 py-1'>Priority</th>
                <th className='border px-2 py-1'>Status</th>
                <th className='border px-2 py-1'>Date</th>
                <th className='border px-2 py-1'>Actions</th>
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

