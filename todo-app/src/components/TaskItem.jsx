const TaskItem = ({ task, deleteTask, completeTask, setTaskToEdit }) => {
    return (
        <div className={`task ${task.completed ? "completed" : ""}`}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => completeTask(task.id)}>
                {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => setTaskToEdit(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
