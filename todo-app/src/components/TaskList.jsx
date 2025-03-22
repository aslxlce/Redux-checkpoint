import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, completeTask, setTaskToEdit }) => {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                        setTaskToEdit={setTaskToEdit}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;
