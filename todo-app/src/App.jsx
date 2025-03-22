import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    // Load tasks from localStorage on first render
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks) setTasks(savedTasks);
    }, []);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
        setTaskToEdit(null);
    };

    const deleteTask = (id) => {
        if (window.confirm("Are you sure?")) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    const completeTask = (id) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
        );
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} />
            <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                completeTask={completeTask}
                setTaskToEdit={setTaskToEdit}
            />
        </div>
    );
};

export default App;
