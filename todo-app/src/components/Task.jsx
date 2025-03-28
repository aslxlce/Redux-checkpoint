import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/taskSlice";
import { useState } from "react";

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
            ) : (
                <p style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
                    {task.description}
                </p>
            )}

            <button onClick={() => dispatch(toggleTask(task.id))}>
                {task.isDone ? "Undo" : "Done"}
            </button>

            {isEditing ? (
                <button
                    onClick={() => {
                        dispatch(editTask({ id: task.id, newDescription }));
                        setIsEditing(false);
                    }}
                >
                    Save
                </button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}

            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
    );
};

export default Task;
