import {motion, useAnimation} from "framer-motion";
import logo from '../Assets/pythonLogo.png'
import github from '../Assets/github.png'
import linkedin from '../Assets/linkedin-logo-linkedin-icon-transparent-free-png.webp'
import {Link} from 'react-router-dom';
import {useInView} from "react-intersection-observer";

function SectionBehind() {

    return (
        <section className="grid grid-cols-3 grid-rows-3 w-screen h-screen overflow-hidden"
                 style={{backgroundColor: "#000411"}}>
            <motion.div
                className=" bg-white absolute z-10 end-0 col-start-1 row-start-1 col-span-full h-16 grid grid-cols-3 place-items-center rounded-2xl mr-5 mt-5 gap-1"
                initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{ease: "easeOut", duration: 2, delay: 1.5}}
                style={{backgroundColor: ""}}>
                <motion.a className="bg-white rounded-3xl" href="https://github.com/Maciel-Dev"
                          initial={{y: -100, opacity: 0}}
                          animate={{y: 0, opacity: 1}} transition={{delay: 2, type: "spring", duration: 2}}>
                    <img src={github} className="object-cover w-10" style={{scale: 0.1}} alt="git"/>
                </motion.a>
                <motion.a className="rounded-3xl" href="https://github.com/Maciel-Dev" initial={{y: -100, opacity: 0}}
                          animate={{y: 0, opacity: 1}} transition={{delay: 2.8, type: "spring", duration: 2}}>
                    <img src={linkedin} className="object-cover w-16" style={{scale: 0.1}} alt="git"/>
                </motion.a>
                <motion.a className="bg-white rounded-3xl" href="https://github.com/Maciel-Dev"
                          initial={{y: -100, opacity: 0}}
                          animate={{y: 0, opacity: 1}} transition={{delay: 3.6, type: "spring", duration: 2}}>
                    <img src={github} className="object-cover w-10" style={{scale: 0.1}} alt="git"/>
                </motion.a>
            </motion.div>
            <motion.div className="col-start-3 col-span-full row-start-2 " initial={{scale: 0}} animate={{scale: 1}}
                        transition={{type: "spring", delay: 3, duration: 1.5}}>
                <p className="text-xl text-white">
                    I Like to develop Web Apps and learn about new technologies daily.
                </p>
                <p className="text-xl text-white">
                    Currently studying Information Systems on IFES
                </p>
                <motion.p className="text-xl text-white font-bold">
                    4 Years of experience
                </motion.p>
            </motion.div>
            <motion.div className="container col-start-1 col-span-2 flex row-start-2 ml-4 h-10"
                        style={{display: "inline"}}>
                <motion.h1 className="text-white font-bold text-7xl" style={{color: "#E1EFE6"}}
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
                <motion.p className="text-white font-semibold ml-1 text-4xl" initial={{x: -200, opacity: 0}}
                          animate={{x: 0, opacity: 1}} transition={{type: "spring", duration: 1, delay: 0.5}}>
                    <p className="font-light">I'm a &nbsp;
                        <motion.div className="cursor-pointer font-bold inline-flex" style={{color: "#EFCB68"}} drag
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
            <div
                className="col-start-1 row-start-3 font-bold gap-4 col-span-full grid grid-cols-6 place-items-center text-xl text-white text-center">
                <motion.p className="rounded-2xl w-full h-20 flex items-center text-center" initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}}
                          style={{backgroundColor: "#C14B1F"}}
                          transition={{
                              type: "spring",
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "mirror",
                              delay: 1.3
                          }}>
                    Object-oriented programming
                </motion.p>
                <motion.p className="rounded-2xl w-full h-20 flex items-center text-center" style={{backgroundColor: "#DD6031"}}
                          initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                    type: "spring",
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 2
                }}>
                    Web Development
                </motion.p>
                <motion.p className="rounded-2xl w-full h-20 flex items-center" style={{backgroundColor: "#736372"}}
                          initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                    type: "spring",
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 2.7
                }}>
                    Database
                </motion.p>
                <motion.p className="rounded-2xl w-full h-20 flex items-center" style={{backgroundColor: "#7D6167"}}
                          initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                    type: "spring",
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 3.4
                }}>
                    API Construction
                </motion.p>
                <motion.p className="rounded-2xl w-full h-20 flex items-center" style={{backgroundColor: "#7D6167"}}
                          initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                    type: "spring",
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 4.1
                }}>
                    Front-End
                </motion.p>
                <motion.p className="rounded-2xl w-full h-20 flex items-center" style={{backgroundColor: "#4C5B5C"}}
                          initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{
                    type: "spring",
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 4.8
                }}>
                    Back-End
                </motion.p>
            </div>
        </section>
    )
}

export default SectionBehind;