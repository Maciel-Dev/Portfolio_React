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
import react from "../Assets/React-icon.svg.png";
import React from "react";
import {Link} from "react-router-dom";

function SectionTechnology() {
    return (
        <motion.section className="w-screen h-screen grid grid-cols-5 grid-rows-5" style={{backgroundColor: "#000411"}}>
            <motion.div className="col-start-3 row-start-1 flex items-center justify-center" exit={{opacity: 0, x: 300}}
                        transition={{type: "spring", duration: 0.6}}>
                <h1 className="text-white text-center sm:text-5xl text-2xl font-bold">
                    Knowledge
                </h1>
            </motion.div>
            <motion.div
                className="row-start-2 row-end-5 col-span-full grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-6 grid-cols-3 sm:gap-16 gap-3 p-9"
                exit={{opacity: 0, y: 500}}
                transition={{ type:"spring", duration: 0.8 }}>
                <Link to="/Html" className="flex">
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
                                    transition={{type: "spring", duration: 1.4, delay: 0.02}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/css" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.02}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={css} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.5, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.4, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.04}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/js" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.04}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={js} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.06}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/vue" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.06}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={vue} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.08}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/postgress" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.08}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={react} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.1}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link> <Link to="/python" className="flex">
                <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.1}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                transition={{type: "spring", duration: 1.4, delay: 0.12}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
            </Link>
                <Link to="/java" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.12}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={java} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.14}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/spring" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.14}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={spring} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.16}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/django" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.16}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={django} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.18}}
                                    viewport={{once: false, amount: 0.4}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/tailwind" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.18}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={tailwind} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.2}}
                                    viewport={{once: false, amount: 1}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/sql" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.2}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={sql} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.5, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.4, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.22}}
                                    viewport={{once: false, amount: 1}}>
                        </motion.img>
                    </motion.div>
                </Link>
                <Link to="/postgress" className="flex">
                    <motion.div className="flex items-center justify-center bg-white rounded-3xl cursor-pointer"
                                initial={{scale: 0, y: 200}}
                                transition={{type: "spring", duration: 1, delay: 0.22}}
                                whileInView={{scale: 1, y: 0}}
                                viewport={{once: false, amount: 0.4}}
                                whileHover={{scale: 1.2, transition: {duration: 1, delay: 0.2, type: "spring"}}}>
                        <motion.img className="" src={postgress} alt="rt"
                                    initial={{scale: 0, rotateZ: 180}}
                                    whileHover={{scale: 0.6, transition: {duration: 1, delay: 0.2, type: "spring"}}}
                                    whileInView={{scale: 0.5, rotateZ: 0}}
                                    transition={{type: "spring", duration: 1.4, delay: 0.24}}
                                    viewport={{once: false, amount: 1}}>
                        </motion.img>
                    </motion.div>
                </Link>
            </motion.div>
        </motion.section>
    )
}

export default SectionTechnology;