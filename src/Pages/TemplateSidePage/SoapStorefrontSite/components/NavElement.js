import { ElementTitle, NavMenu } from "../styledComponents/styledSoapTemplate"
import { motion } from "framer-motion"


function NavElement(props) {
    return (
        <NavMenu
            as={motion.div}
            whileHover={{
                scale: 1.05,
                zIndex: 10,
                backgroundColor: "rgb(255, 236, 237, 0.3)",
                transition: { duration: 0.5 }
            }}
            transition={{
                type: 'spring',
                stiffness: 250,
                originX: 0
            }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                backgroundColor: "transparent",
                transition: { duration: 0.5 }
            }}
        >
            <ElementTitle>{props.elementTitle}</ElementTitle>
        </NavMenu>
    )
}

export default NavElement