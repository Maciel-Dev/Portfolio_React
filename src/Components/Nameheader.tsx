import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import SectionBehind from "./SectionBehind";
import {AnimatePresence, easeInOut, motion} from "framer-motion";
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

// @ts-ignore
function Nameheader({language}) {
    const location = useLocation();
    let nome = language.repeat(100)

    return (
        <>
            <motion.div className="grid text-center w-screen grid-rows-2">
                <motion.div className="row-start-1 bg-blue-500 flex items-center">
                    <motion.p
                        className="z-10 text-white text-3xl font-bold flex text-ellipsis whitespace-nowrap select-none [word-spacing:140px]"
                        initial={{x: -1000}}
                        animate={{x: 0 }}
                        transition={{ type:easeInOut, repeatType:"mirror", repeat: Infinity, duration: 5 }}>
                        {nome}
                    </motion.p>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Nameheader;