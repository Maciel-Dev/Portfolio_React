import {motion} from "framer-motion";
import logo from '../Assets/pythonLogo.png'
import logoJava from '../Assets/Java-Logo.png'

function SectionAboutMe() {

    return (
        <section className="overflow-hidden">
            <div className="w-screen h-screen overflow-hidden grid grid-cols-3 grid-rows-3"
                 style={{backgroundColor: "#000411"}}>
                <div className="col-start-2">
                    <motion.h1 className="col-start-2 row-start-1 text-center text-white text-2xl sm:text-5xl font-bold" initial={{scale: 0}}
                               whileInView={{scale: 1}} transition={{type: "spring", duration: 1.5}}
                               viewport={{once: false, amount: 0.5}}>
                        About Me
                    </motion.h1>
                </div>
                <div className="col-start-1 row-start-1 sm:translate-y-0 translate-y-36">
                    <motion.img className="" src={logo} alt="rt"
                                whileHover={{scale: 0.6}}
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.5, rotateZ: 0}} transition={{type: "spring", duration: 3}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </div>
                <div className="sm:col-start-3 sm:row-start-2 col-start-3 row-start-1 sm:translate-y-0 translate-y-40">
                    <motion.img className="" src={logoJava} alt="rt"
                                whileHover={{scale: 1}}
                                initial={{scale: 0, rotateZ: 180}}
                                whileInView={{scale: 0.7, rotateZ: 0}} transition={{type: "spring", duration: 3, delay: 1}}
                                viewport={{once: false, amount: 0.4}}>
                    </motion.img>
                </div>
                <motion.p className="col-start-1 col-span-full row-start-2 sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:ml-10 text-sm sm:text-lg sm:-translate-y-14 text-white sm:mr-10 p-9"
                          initial={{opacity: 0}}
                          whileInView={{opacity: 1}} transition={{type: "spring", duration: 2}}
                          viewport={{once: false, amount: 0.5}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </motion.p>
            </div>
        </section>
    )

}

export default SectionAboutMe;