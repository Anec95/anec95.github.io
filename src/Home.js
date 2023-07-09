import Navbar from "Assets/components/Navbar/Navbar"
import AboutMe from "Computer_vs/AboutMe/AboutMe"
import ProfesMe from "Computer_vs/ProfesMe/ProfesMe"
import Portfolio from "Computer_vs/Portfolio/Portfolio"
import Template from "Computer_vs/Template/Template"
import Curiosita from "Computer_vs/Curiosita/Curiosita"
import Contattami from "Computer_vs/Contattami/Contattami"
import { ProgressBar } from "styledHome"
import {
    motion,
    useScroll,
    useSpring
  //   useMotionValue
  } from "framer-motion";



function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <Navbar />
            <AboutMe />
            <ProfesMe />
            <Portfolio />
            <Template />
            <Curiosita />
            <Contattami />

            <ProgressBar
                as={motion.div}
                style={{ scaleX }}
            />
        </>
    )
}

export default Home


