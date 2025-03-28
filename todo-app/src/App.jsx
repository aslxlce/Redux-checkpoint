import { Provider } from "react-redux";
import { store } from "./redux/store";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>To-Do List</h1>
                <AddTask />
                <ListTask />
            </div>
        </Provider>
    );
};

export default App;
