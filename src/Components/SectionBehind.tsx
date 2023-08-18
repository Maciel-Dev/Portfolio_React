import React, {useState} from "react";
import {addScaleCorrector, delay, motion, useScroll, useSpring, useTransform} from "framer-motion";

function SectionBehind() {


    return (
        <section className="grid grid-cols-3 grid-rows-3 w-screen h-screen overflow-hidden" style={{backgroundColor: "#160C28"}}>
            {/* White Background */}
            <motion.div className="col-start-1 row-start-3 bg-white w-screen h-full" initial={{ y:300, opacity: 0 }} animate={{ y: 0, opacity: 1}} transition={{ type: "spring", duration: 2, delay: 1.2 }}>

            </motion.div>

            <motion.div className="col-start-1 row-start-2 flex ml-4 justify-start">
                <h1 className="text-white font-bold text-3xl" style={{ color: "#EFCB68" }}>
                    WELCOME TO MY PORTFOLIO
                </h1>
            </motion.div>
        </section>
    )
}

export default SectionBehind;