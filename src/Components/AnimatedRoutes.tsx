import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import SectionBehind from "./SectionBehind";
import {AnimatePresence} from "framer-motion";
import Csharp from "./Pages/Csharp";
import Css from "./Pages/Css";
import Js from "./Pages/Js";
import Postgres from "./Pages/Postgres";
import Python from "./Pages/Python";
import ReactC from "./Pages/React";
import Spring from "./Pages/Spring";
import Sql from "./Pages/Sql";
import Tailwind from "./Pages/Tailwind";
import Vue from "./Pages/Vue";
import Java from "./Pages/Java";
import Django from "./Pages/Django";
import Editor from "./Editor";
import EditorNew from "./Editor";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/csharp" element={<Csharp />} />
                <Route path="/js" element={<Js />} />
                <Route path="/postgress" element={<Postgres />} />
                <Route path="/java" element={<Java />} />
                <Route path="/python" element={<Python />} />
                <Route path="/react" element={<ReactC />} />
                <Route path="/spring" element={<Spring />} />
                <Route path="/sql" element={<Sql />} />
                <Route path="/django" element={<Django />} />
                <Route path="/tailwind" element={<Tailwind />} />
                <Route path="/vue" element={<Vue />} />
                <Route path="/css" element={<Css />} />
                <Route path="/editor" element={<EditorNew onChange={undefined} language={undefined} code={undefined} theme={undefined} />} />
                <Route path="/" element={<SectionBehind />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;