import './App.css';
import SectionBehind from "./Components/SectionBehind";
import SectionAboutMe from "./Components/SectionAboutMe";
import SectionTechnology from "./Components/SectionTechnology";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
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
