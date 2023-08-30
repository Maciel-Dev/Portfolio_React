import {motion} from "framer-motion";

function SectionAboutMe() {

    return (
        <section className="overflow-hidden">
            <div className="w-screen h-screen overflow-hidden grid grid-cols-3 grid-rows-3"
                 style={{backgroundColor: "#000411"}}>
                <div className="col-start-1 row-start-1 col-span-full">
                    <motion.h1 className="text-center text-white text-2xl sm:text-5xl font-bold" initial={{scale: 0}}
                               whileInView={{scale: 1}} transition={{type: "spring", duration: 1.5}}
                               viewport={{once: false, amount: 0.5}}>
                        About Me
                    </motion.h1>
                </div>
                {/*<div*/}
                {/*    className="col-start-1 row-start-2 col-span-full flex items-center justify-center -translate-y-36 scale-75 sm:scale-100 ">*/}
                {/*    <motion.img className="" src={my_picture} alt="rt"*/}
                {/*                whileHover={{scale: 0.9}}*/}
                {/*                initial={{scale: 0, opacity: 0}}*/}
                {/*                whileInView={{scale: 0.8, opacity: 1}} transition={{type: "spring", duration: 3}}*/}
                {/*                viewport={{once: false, amount: 0.4}}>*/}
                {/*    </motion.img>*/}
                {/*</div>*/}
                <motion.div
                    className="col-start-1 col-span-full row-start-1 sm:col-start-1 text-center sm:row-start-2 sm:ml-10 text-sm sm:text-lg sm:-translate-y-14 text-white sm:mr-10 p-9"
                    initial={{opacity: 0, y: -100}}
                    whileInView={{opacity: 1, y: 0}} transition={{type: "spring", duration: 2}}
                    viewport={{once: false, amount: 0.5}}>
                    <motion.p>
                        I'm a passionate and wanderer by the paths of programming and technology.
                    </motion.p>
                    <motion.p>
                        I have experience in the field of development, working individually, and with a team, always learning and discovering new subjects and ways of programming.
                    </motion.p>
                    <motion.p>
                        A passion for Java, more specifically, with SpringBoot, was the moment when my path for Web Development was created, and a lot of knowledge was obtained.
                    </motion.p>
                    <motion.p>
                        But, besides I love Technology, I like to think in new ways to innovate everyday, even if it doesn't have some relation with coding.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )

}

export default SectionAboutMe;