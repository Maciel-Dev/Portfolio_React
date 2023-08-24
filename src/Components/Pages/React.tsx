import {motion} from 'framer-motion';
import React from 'react';
import react from "../../Assets/React-icon.svg.png";
import {Link} from "react-router-dom";


function ReactC() {
    return (
        <section className="w-screen h-screen grid grid-cols-5 grid-rows-5 overflow-hidden"
                 style={{backgroundColor: "#000411"}}>
            <Link to="/" className="sm:flex sm:col-span-1 sm:col-start-3 sm:row-start-2 col-start-3 row-start-2 sm:scale-100 scale-150 origin-bottom">
                <motion.div className="sm:flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.02}}
                            whileInView={{scale: 1.5, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.3, rotateZ: 0, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                            style={{  }}>
                    <motion.img className="" src={react} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.4, rotateZ: 15, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.3, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.04}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
            </Link>
        </section>
    );
}

export default ReactC;