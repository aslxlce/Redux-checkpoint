import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTask;
