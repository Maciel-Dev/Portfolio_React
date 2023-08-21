import {motion} from "framer-motion";
import github from '../Assets/github.png'
import logo from "../Assets/pythonLogo.png";

function SectionTechnology() {
    return (
        <section className="w-screen h-screen grid grid-cols-5 grid-rows-5" style={{backgroundColor: "#000411"}}>
            <motion.div className="col-start-3">
                <h1 className="text-white text-center text-5xl font-bold">
                    Knowledge
                </h1>
            </motion.div>
            <div className="row-start-2 row-end-5 col-span-full grid grid-rows-2 grid-cols-5 gap-16 p-9">
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.05}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.05}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.1}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.1}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.15}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.15}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.2}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.2}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.25}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.25}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.3}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.3}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.35}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.35}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.4}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.45}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}}
                                transition={{type: "spring", duration: 1.4, delay: 0.5}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </motion.div>
                <motion.div className="flex items-center justify-center bg-white rounded-3xl"
                            initial={{scale: 0, y: 200}}
                            transition={{type: "spring", duration: 1, delay: 0.5}}
                            whileInView={{scale: 1, y: 0}}
                            viewport={{once: false, amount: 0.4}}
                            whileHover={{scale: 1.2}}>
                    <motion.img className="" src={logo} alt="rt"
                                initial={{scale: 0, rotateZ: 180}}
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