import { motion } from "framer-motion"
import { SidePageMain } from "Assets/styledComponents/SidePageMain/StyledSidePageMain"
import { useLocation } from "react-router-dom"
import Description from "./components/Description/Description"
import Skill from "./components/Skill/Skill"

function ProfessionalmenteMe() {
    const location = useLocation()
    return (
        <motion.div
            initial={{height: 0}}
            animate={{height: "100vh"}}
            exit={{y: window.innerHeight, transition: {duration: 0.1}}}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <SidePageMain pathname={location.pathname}>
                <Description />
                <Skill />
            </SidePageMain>            
        </motion.div>
    )
}

export default ProfessionalmenteMe