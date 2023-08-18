import React, {useState} from "react";
import {addScaleCorrector, delay, motion, useScroll, useSpring, useTransform} from "framer-motion";


function random_number(){
    return Math.random();
}

function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Cubes() {

    return (
        <>
            <motion.div className="absolute rounded w-10 h-10 end-1/3 rotate-45 top-1/3"
                        style={{ backgroundColor: "#E1EFE6" }}
                        initial={{rotate: 45, opacity: 1, y: 20, scale: random_number()}} animate={{rotate: 225, y: -200, opacity: [0, 1, 0]}}
                        transition={{duration: randomIntFromInterval(2,8), type: "spring", repeat: Infinity, times: [0, 0.5, 1]}}>

            </motion.div>
            <motion.div className="absolute rounded w-10 h-10 end-1/2 rotate-45 top-1/2"
                        style={{ backgroundColor: "#E1EFE6" }}
                        initial={{rotate: 45, opacity: 1, y: 20, scale: random_number()}} animate={{rotate: 225, y: -200, opacity: [0, 1, 0]}}
                        transition={{duration: randomIntFromInterval(2,8), type: "spring", repeat: Infinity, times: [0, 0.5, 1]}}>

            </motion.div>

        </>
    )
}

export default Cubes;