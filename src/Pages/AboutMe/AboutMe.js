import { SidePageMain } from "Assets/styledComponents/SidePageMain/StyledSidePageMain"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import AboutMeBody from "./components/AboutMeBody/AboutMeBody"
import AboutMeGrid from "./components/AboutMeGrid/AboutMeGrid"

function AboutMe() {
    const location = useLocation()
    return (
        <motion.div
            initial={{height: 0}}
            animate={{height: "100vh"}}
            exit={{y: window.innerHeight, transition: {duration: 0.1}}}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <SidePageMain pathname={location.pathname}>
                <AboutMeBody />
                <AboutMeGrid />
            </SidePageMain>            
        </motion.div>
    )
}

export default AboutMe