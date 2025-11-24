
function ToDoitem({ task, index, deleteTask, toggleComplete , editTask}) {
    return(
        <div className="Todo-item-row">

            <p>{index +1}</p>
            <p>{task.taskName}</p>
            <p>{task.priority}</p>
            <p>{task.status}</p>
            <p>{task.date}</p>

            <div className="action-icon">
                <button onClick={() => toggleComplete(index)}>Tick</button>
                <button onClick={() => deleteTask(index)}Delete></button>
                <button onClick={ () => editTask(index) }>Edit</button>
                
            </div>

        </div>
    );
}

export default ToDoitem;



