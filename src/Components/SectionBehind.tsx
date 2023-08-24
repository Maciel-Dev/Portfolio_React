import {motion} from "framer-motion";
import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin-logo-linkedin-icon-transparent-free-png.webp'
import SectionAboutMe from "./SectionAboutMe";
import React from "react";
import SectionTechnology from "./SectionTechnology";

function SectionBehind() {

    return (
        <>
            <motion.section className="absolute w-screen h-screen overflow-x-hidden">
                <section className="grid grid-cols-3 w-screen h-screen overflow-hidden"
                         style={{backgroundColor: "#000411"}}>
                    <div className="flex justify-center w-screen">
                        <motion.div
                            className="sm:w-48 w-36 z-10 end-0 col-start-2 col-span-full h-12 sm:h-16 grid grid-cols-3 place-items-center rounded-2xl mr-5 mt-5 gap-1"
                            initial={{scaleY: 0}} animate={{scaleY: 1}}
                            transition={{ease: "easeOut", duration: 2, delay: 1.5}}
                            style={{backgroundColor: "#E1EFE6"}}>
                            <motion.a className="bg-white rounded-3xl" href="https://github.com/Maciel-Dev"
                                      initial={{y: -100, opacity: 0}}
                                      animate={{y: 0, opacity: 1}} transition={{delay: 2, type: "spring", duration: 2}}>
                                <img src={github} className="object-cover sm:w-10 w-8 sm:translate-y-0 -translate-y-1"
                                     style={{scale: 0.1}} alt="git"/>
                            </motion.a>
                            <motion.a className="rounded-3xl w-14" href="https://github.com/Maciel-Dev"
                                      initial={{y: -100, opacity: 0}}
                                      animate={{y: 0, opacity: 1}}
                                      transition={{delay: 2.8, type: "spring", duration: 2}}>
                                <img src={linkedin} className="object-cover sm:w-16 sm:translate-y-0 -translate-y-1"
                                     style={{scale: 0.1}} alt="git"/>
                            </motion.a>
                            <motion.a className="bg-white rounded-3xl" href="https://github.com/Maciel-Dev"
                                      initial={{y: -100, opacity: 0}}
                                      animate={{y: 0, opacity: 1}}
                                      transition={{delay: 3.6, type: "spring", duration: 2}}>
                                <img src={github} className="object-cover sm:w-10 w-8 sm:translate-y-0 -translate-y-1"
                                     style={{scale: 0.1}} alt="git"/>
                            </motion.a>
                        </motion.div>
                    </div>
                    <motion.div
                        className=" sm:translate-y-16 lg:translate-y-8 translate-y-16 text-center sm:col-start-1 sm:row-start-2 sm:flex sm:ml-4 col-start-1 col-span-full"
                        style={{display: "inline"}}>
                        <motion.h1 className="text-white font-bold sm:text-9xl text-5xl" style={{color: "#E1EFE6"}}
                                   initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}}
                                   transition={{type: "spring", duration: 2, delay: 1.2}}>
                            <p className="inline-flex">
                                Hi, I'm <motion.span className="" style={{color: "#EFCB68"}}>&nbsp; JOÃO</motion.span>
                                <motion.p className="origin-center" initial={{rotateZ: 45}} animate={{rotateZ: 0}}
                                          transition={{repeat: Infinity, repeatType: "mirror", duration: 1, delay: 1}}>
                                    👋
                                </motion.p>
                            </p>
                        </motion.h1>
                        <motion.p className="text-white font-semibold ml-1 text-xl sm:text-4xl"
                                  initial={{x: -200, opacity: 0}}
                                  animate={{x: 0, opacity: 1}} transition={{type: "spring", duration: 1, delay: 0.5}}>
                            <p className="font-light">I'm a &nbsp;
                                <motion.div className="cursor-pointer font-bold inline-flex" style={{color: "#EFCB68"}}
                                            drag
                                            dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                                            dragElastic={0.2} whileDrag={{scale: 1.2}}
                                            whileTap={{color: "white", scale: 0.7}}>
                                    <p>

                                        Full Stack Developer.
                                    </p>
                                </motion.div>
                            </p>
                        </motion.p>
                    </motion.div>
                    <motion.div className="sm:col-start-1 sm:row-start-3 text-center col-span-full" initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{type: "spring", delay: 3, duration: 1.5}}>
                        <p className="sm:text-xl text-sm text-white">
                            I Like to develop Web Apps and learn about new technologies daily.
                        </p>
                        <p className="sm:text-xl text-sm text-white ">
                            Currently studying Information Systems on IFES
                        </p>
                        <motion.p className="sm:text-xl text-sm text-white font-bold">
                            4 Years of experience
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="col-start-1 font-bold gap-4 col-span-full grid sm:grid-cols-6 grid-cols-3 sm:-translate-y-0 -translate-y-16 place-items-center sm:text-xl text-xs text-white text-center p-9"
                        initial={{ opacity:0 }}
                        whileInView={{opacity: 1}} transition={{type: "spring", duration: 3}}
                        viewport={{once: false, amount: 0.4}}>
                        <motion.p className="rounded-2xl w-full sm:h-20 h-10 flex items-center justify-center"
                                  initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}}
                                  style={{backgroundColor: "#E1EFE6", color:"#160C28"}}
                                  transition={{
                                      type: "spring",
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatType: "mirror",
                                      delay: 1.3
                                  }}>
                            Object-oriented programming
                        </motion.p>
                        <motion.p className="rounded-2xl w-full sm:h-20 h-10 flex items-center justify-center"
                                  style={{backgroundColor: "#E1EFE6", color:"#160C28"}}
                                  initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                            type: "spring",
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: 2
                        }}>
                            Web Development
                        </motion.p>
                        <motion.p className="rounded-2xl w-full sm:h-20 h-10 flex items-center justify-center"
                                  style={{backgroundColor: "#E1EFE6", color:"#160C28"}}
                                  initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                            type: "spring",
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: 2.7
                        }}>
                            Database
                        </motion.p>
                        <motion.p className="rounded-2xl w-full sm:h-20 h-10 flex items-center justify-center"
                                  style={{backgroundColor: "#E1EFE6", color:"#160C28"}}
                                  initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                            type: "spring",
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: 3.4
                        }}>
                            API Construction
                        </motion.p>
                        <motion.p className="rounded-2xl w-full sm:h-20 h-10 flex items-center justify-center"
                                  style={{backgroundColor: "#E1EFE6", color:"#160C28"}}
                                  initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                            type: "spring",
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: 4.1
                        }}>
                            Front-End
                        </motion.p>
                        <motion.p className="rounded-2xl w-full sm:h-20 h-10 flex items-center justify-center"
                                  style={{backgroundColor: "#E1EFE6", color:"#160C28"}}
                                  initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                            type: "spring",
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: 4.8
                        }}>
                            Back-End
                        </motion.p>
                    </motion.div>
                </section>
                <SectionAboutMe></SectionAboutMe>
                <SectionTechnology></SectionTechnology>
            </motion.section>
        </>
    )
}

export default SectionBehind;