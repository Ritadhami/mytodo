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

        <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md md:flex-row md:items-center">

            <input
             type="text" 
             placeholder="Task Name " 
             className="flex-1 px-3 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
             value={taskName} 
             onChange={(e) => setTaskName(e.target.value)}
             />

            <select className=" flex-1 md:w-40 px-3 py-2 border rounded-lg w-full md:w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <input
             type="date" 
             placeholder="Deadline"
             className=" flex-1 md:w-44 px-3 py-2 border rounded-lg w-full md:w-44 focus:outline-none focus:ring-2 focus:ring-blue-400"
             value={date}
             onChange={(e) => setDate(e.target.value)}
             />
            <button
             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" 
             onClick={handleSave}>save</button>

        </div>
    );
}
 
export default AddTodo;