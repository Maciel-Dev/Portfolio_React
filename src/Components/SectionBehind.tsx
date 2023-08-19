import {motion} from "framer-motion";

function SectionBehind() {


    return (
        <section className="grid grid-cols-3 grid-rows-3 w-screen h-screen overflow-hidden"
                 style={{backgroundColor: "#000411"}}>
            {/* White Background */}
            <motion.div className="col-start-3 row-start-1 grid grid-cols-3"
                        initial={{y: 300, opacity: 0}}
                        animate={{y: 0, opacity: 1}} transition={{type: "spring", duration: 2, delay: 1.2}}>
                <div className="bg-white w-20 rounded-3xl text-right h-full col-start-3">

                </div>
            </motion.div>

            <motion.div className=" conteiner col-start-1 flex row-start-2 ml-4 h-10" style={{display: "inline"}}>
                <motion.h1 className="text-white font-bold text-7xl" style={{color: "#E1EFE6"}}
                           initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}}
                           transition={{type: "spring", duration: 2, delay: 1.2}}>
                    <p className="truncate">
                        Hi, I'm <motion.span className="" style={{color: "#EFCB68"}}>JOAO</motion.span>
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

                                Full Stack Developer
                            </p>
                        </motion.div>
                    </p>
                </motion.p>
            </motion.div>
        </section>
    )
}

export default SectionBehind;