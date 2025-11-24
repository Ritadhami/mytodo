import { useState } from 'react';

function AddTodo({addTask}) {

  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');
  const [date, setDate] = useState('');
  
  const handleSave = () => {
    if(!taskName || !priority || !date)
      return;
    addTask({
      taskName,
      priority,
      status: 'Pending',
      date,
    });

    setTaskName('');
    setPriority('');
    setDate('');
  };

return(

        <div className="add-todo-wrapper">

            <input
             type="text" 
             placeholder="Task Name " 
             className="taskname-input"
             value={taskName} 
             onChange={(e) => setTaskName(e.target.value)}
             />

            <select className="priority-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <input
             type="text" 
             placeholder="Deadline"
             className="Date-input"
             value={date}
             onChange={(e) => setDate(e.target.value)}
             />
            <button className="save-btn" onClick={handleSave}>save</button>

        </div>
    );
}
 
export default AddTodo;