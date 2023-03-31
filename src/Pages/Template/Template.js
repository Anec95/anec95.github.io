import { motion } from "framer-motion"
import { SidePageMain } from "Assets/styledComponents/SidePageMain/StyledSidePageMain"
import { useLocation } from "react-router-dom"
import TemplateBody from "./components/TemplateBody/TemplateBody"
import TemplateCarousel from "./components/TemplateCarousel/TemplateCarousel"

function Template(props) {
    const location = useLocation()

    return (
        <motion.div
            initial={{height: 0}}
            animate={{height: "100vh"}}
            exit={{y: window.innerHeight, transition: {duration: 0.1}}}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <SidePageMain pathname={location.pathname}>
                <TemplateBody />
                <TemplateCarousel
                    cardTemplateElement={props.cardTemplateElement}
                    index={props.index}
                    setIndex={props.setIndex}
                    functionPlus={props.functionPlus}
                    functionMinus={props.functionMinus}
                />
            </SidePageMain> 
        </motion.div>
    )
}

export default Template