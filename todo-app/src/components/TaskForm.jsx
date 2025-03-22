import { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
    const [task, setTask] = useState({ name: "", description: "" });

    useEffect(() => {
        if (taskToEdit) setTask(taskToEdit);
    }, [taskToEdit]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.name.trim() || !task.description.trim()) return;

        if (taskToEdit) {
            editTask(task);
        } else {
            addTask(task);
        }

        setTask({ name: "", description: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Task Name"
                value={task.name}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Task Description"
                value={task.description}
                onChange={handleChange}
                required
            />
            <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
        </form>
    );
};

export default TaskForm;
