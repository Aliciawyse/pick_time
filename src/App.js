import React from "react";
import TimeTable from "./TimeTable";
import { Provider as ReduxProvider } from 'react-redux';
import store from "./store";

const App = () => {
    console.log("===store===", store);
    return (
        <div>
            <ReduxProvider store={store}>
                <TimeTable />
            </ReduxProvider>
        </div>
    )
};

export default App;