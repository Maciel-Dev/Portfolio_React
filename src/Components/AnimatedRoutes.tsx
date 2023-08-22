import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import SectionBehind from "./SectionBehind";
import {AnimatePresence} from "framer-motion";
import Html from "./Pages/Html";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/html" element={<Html />} />
                <Route path="/" element={<SectionBehind />} />

            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;