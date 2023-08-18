import React, {useRef} from 'react';
import './App.css';
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

function Component() {
    // const [isOpen, setIsOpen] = useState(false);
    const refComponent = useRef(null);
    const {scrollYProgress} = useScroll({
        target: refComponent,
        offset: ["end end", "end start"]
    });

    // const rotationX = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 2]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -350]);
    const rotationSwift = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 10,
        restDelta: 0.01
    })

    return (
        <motion.section ref={refComponent} className="overflow-x-hidden">
            <div
                className="overflow-hidden bg-black grid grid-cols-3 grid-rows-3 w-screen h-screen place-items-center">
                <motion.div className="fixed text-white font-bold text-sm sm:text-3xl fixed col-start-2 row-start-3"
                           style={{translateY: translateY, scaleY: scale}}>
                    Teste
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Component;
