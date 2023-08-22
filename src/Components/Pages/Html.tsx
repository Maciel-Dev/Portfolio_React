import {motion} from 'framer-motion';
import React from 'react';
import SectionTechnology from "../SectionTechnology";
import html from "../../Assets/HTML5_logo_and_wordmark.svg.png";
import {Link} from "react-router-dom";
import css from "../../Assets/CSS3_logo_and_wordmark.svg.png";
import js from "../../Assets/logo-javascript-1024.png";
import logo from "../../Assets/pythonLogo.png";
import java from "../../Assets/Java-Logo.png";
import spring from "../../Assets/spring-boot-project-logo.png";
import django from "../../Assets/Django-Logo.png";
import tailwind from "../../Assets/Tailwind_CSS_Logo.svg.png";
import sql from "../../Assets/sql-database-generic-icon-760x1024-z6gbzcs2.png";
import postgress from "../../Assets/Postgresql_elephant.svg.png";

function Html() {
    return (
        <section className="w-screen h-screen grid grid-cols-5 grid-rows-5" style={{backgroundColor: "#000411"}}>
            <motion.div className="col-start-3" initial={{ scale: 1 }} animate={{ scale: 0 }} transition={{ duration: 1.7 }}>
                <h1 className="text-white text-center text-5xl font-bold">
                    Knowledge
                </h1>
            </motion.div>
            <div className="row-start-2 row-end-5 col-span-full grid grid-rows-2 grid-cols-5 gap-16 p-9">
                <motion.div className="flex items-center justify-center rounded-3xl cursor-pointer z-10"
                            initial={{scale: 1, y: 0, z: 0, backgroundColor: "white"}}
                            transition={{type: "spring", duration: 3, delay: 1}}
                            animate={{scale: 5, y: 100, z: 30, backgroundColor: ['hsla(0, 0%, 100%, 1)', 'hsla(19, 100%, 52%, 1)']}}
                            viewport={{once: false, amount: 0.4}}>
                    <motion.img className="" src={html} alt="rt"
                                initial={{scale: 0.5, rotateZ: 0}}
                                animate={{scale: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.05}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{ scale: 1 }}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={css} alt="rt"
                                initial={{ scale: 0.4 }}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 1}}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={js} alt="rt"
                                initial={{ scale: 0.5 }}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 1}}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{ scale: 0.5 }}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 1}}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={java} alt="rt"
                                initial={{ scale: 0.5 }}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 1}}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={spring} alt="rt"
                                initial={{ scale: 0.5 }}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 1}}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={django} alt="rt"
                                initial={{ scale: 0.5 }}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 1}}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={tailwind} alt="rt"
                                initial={{ scale: 0.5 }}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 1}}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={sql} alt="rt"
                                initial={{ scale: 0.4 }}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 1}}
                            animate={{ scale: 0 }}
                            transition={{ duration: 2, ease:"easeOut" }}>
                    <motion.img className="" src={postgress} alt="rt"
                                initial={{ scale: 0.5 }}>
                    </motion.img>
                </motion.div>
            </div>
        </section>
    );
}

export default Html;