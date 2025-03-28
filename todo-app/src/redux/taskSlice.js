import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({ id: uuidv4(), description: action.payload, isDone: false });
        },
        toggleTask: (state, action) => {
            const task = state.find((t) => t.id === action.payload);
            if (task) task.isDone = !task.isDone;
        },
        editTask: (state, action) => {
            const task = state.find((t) => t.id === action.payload.id);
            if (task) task.description = action.payload.newDescription;
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTask, toggleTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
