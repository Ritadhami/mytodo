import { MdDelete, MdEdit, MdDone } from "react-icons/md";

function ToDoitem({ task, index, deleteTask, toggleComplete , editTask}) {
    return(
        <div className="Todo-item-row">

            <p>{index +1}</p>
            <p>{task.taskName}</p>
            <p>{task.priority}</p>
            <p>{task.status}</p>
            <p>{task.date}</p>

            <div className="action-icon">
                {/*Tick  Button */}
                <button
                className="p-2 text-green-600 hover:text-green-800"
                onClick={() => toggleComplete(index)}>
                    <MdDone size={20} />
                </button>

                {/* delete button */}
                <button 
                className= "p-2 text-green-600 hover:text-green-800"
                onClick={() => deleteTask(index)}>
                    <MdDelete size= {20}/>
                </button>

                {/* edit button */}
                <button 
                className="p-2 text-green-600 hover:text-green-800"
                onClick={ () => editTask(index) }>
                    <MdEdit size= {20}/>
                </button>
                
            </div>

        </div>
    );
}

export default ToDoitem;



