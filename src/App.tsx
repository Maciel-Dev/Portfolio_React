import React, {useRef, useState} from 'react';
import './App.css';
import {addScaleCorrector, delay, motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useFollowPointer} from "./use-follow-pointer";
import SectionBehind from "./Components/SectionBehind";
import Cubes from "./Components/Cubes";

function App() {

    const [scale, toggleScale] = useState(0);
    const [scaleButton, toggleScaleButton] = useState(1);
    const [translateY, toggleTranslateY] = useState(-300);
    const [translateX, toggleTranslateX] = useState(-300);
    const [infinite, toggleInfinite] = useState("");

    return (
        <>
            {/*<Cubes></Cubes>*/}
            <SectionBehind></SectionBehind>

        </>
    )
}

export default App;
