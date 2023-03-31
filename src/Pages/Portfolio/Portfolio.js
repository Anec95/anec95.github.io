import { SidePageMain } from "Assets/styledComponents/SidePageMain/StyledSidePageMain"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import Body from "./components/Body/Body"
import Carousel from "./components/Carousel/Carousel"


function Portfolio() {
    const location = useLocation()
    return (
        <motion.div
            initial={{height: 0}}
            animate={{height: "100vh"}}
            exit={{y: window.innerHeight, transition: {duration: 0.1}}}
            // initial={{opacity: 0}}
            // animate={{opacity: 1}}
            // exit={{opacity: 0}}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <SidePageMain pathname={location.pathname}>
                <Body />
                <Carousel />
            </SidePageMain>            
        </motion.div>
    )
}

export default Portfolio