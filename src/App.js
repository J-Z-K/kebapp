import React from "react";
import Application from "./Components/Application/";
import UserProvider from "./Providers/UserProvider";
import MenuBar from "./Components/MenuBar/";
import "./globalStyles/index.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <UserProvider>
            <div className="App">
                <BrowserRouter>
                    <MenuBar />
                    <Application />
                </BrowserRouter>
            </div>
        </UserProvider>
    );
}

export default App;
