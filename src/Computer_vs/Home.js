import Navbar from "Assets/components/Navbar/Navbar"
import AboutMe from "Assets/components/AboutMe/AboutMe"
import ProfesMe from "Assets/components/ProfesMe/ProfesMe"
import Portfolio from "Assets/components/Portfolio/Portfolio"
import Template from "Assets/components/Template/Template"
import Curiosita from "Assets/components/Curiosita/Curiosita"
import Contattami from "Assets/components/Contattami/Contattami"
import { ProgressBar } from "./styledComponents/styledHome"
import {
    motion,
    useScroll,
    useSpring
  //   useMotionValue
  } from "framer-motion";



function Home(props) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <Navbar />
            <AboutMe
                innerWidth={props.innerWidth}
            />
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


