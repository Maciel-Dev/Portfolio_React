import {motion} from "framer-motion";
import github from '../Assets/github.png'
import logo from "../Assets/pythonLogo.png";
import angular from "../Assets/Angular.png";
import csharp from "../Assets/c-sharp-c-logo-02F17714BA-seeklogo.com.png";
import css from "../Assets/CSS3_logo_and_wordmark.svg.png";
import django from "../Assets/Django-Logo.png";
import html from "../Assets/HTML5_logo_and_wordmark.svg.png";
import js from "../Assets/logo-javascript-1024.png";
import spring from "../Assets/spring-boot-project-logo.png";
import tailwind from "../Assets/Tailwind_CSS_Logo.svg.png";
import vue from "../Assets/Vue.js_Logo_2.svg.png";
import java from "../Assets/Java-Logo.png";
import postgress from "../Assets/Postgresql_elephant.svg.png";
import sql from "../Assets/sql-database-generic-icon-760x1024-z6gbzcs2.png";
import React from "react";
import { Link } from "react-router-dom";

function SectionTechnology() {
    return (
        <section className="w-screen h-screen grid grid-cols-5 grid-rows-5" style={{backgroundColor: "#000411"}}>
            <motion.div className="col-start-3">
                <h1 className="text-white text-center text-5xl font-bold">
                    Knowledge
                </h1>
            </motion.div>
            <div className="row-start-2 row-end-5 col-span-full grid grid-rows-2 grid-cols-5 gap-16 p-9">
                <Link to="/Html">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={html} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.05}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.05}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={css} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.5, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.4, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.1}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.1}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={js} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.15}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.15}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                transition={{type: "spring", duration: 1.4, delay: 0.2}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.2}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={java} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.25}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.25}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={spring} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.3}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.3}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={django} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.35}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.35}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={tailwind} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.4}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.45}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={sql} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.5, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.4, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.5}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 0.5, delay: 0.5}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={postgress} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.55}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
            </div>
        </section>
    )
}

export default SectionTechnology;