import {motion} from "framer-motion";
import logo from '../Assets/pythonLogo.png'

function SectionBehind() {


    return (
        <section className="grid grid-cols-4 grid-rows-3 w-screen h-screen overflow-hidden "
                 style={{backgroundColor: "#000411"}}>
            <motion.div className="col-start-3 col-span-full row-start-2 " initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type:"spring", delay: 3, duration: 1.5 }}>
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
            {/*<motion.div className="absolute col-start-4 inset-y-0 right-0 row-span-2 origin-right w-28 rounded-2xl" style={{ backgroundColor: "#F2542D" }}>*/}

            {/*</motion.div>*/}
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
        </section>
    )
}

export default SectionBehind;