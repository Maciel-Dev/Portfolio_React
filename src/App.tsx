import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {

    return (
        <>
            <Router>
                <div className="overflow-x-hidden">
                    <AnimatedRoutes></AnimatedRoutes>
                </div>
            </Router>
        </>
    )
}

export default App;
