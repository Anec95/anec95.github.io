import { MenuElement, NavTitle } from "../styledComponents/styledTattooStorefrontSite"
import { motion } from "framer-motion"



function NavElement(props) {
    return (
        <MenuElement
            nCont={props.nCont}
            as={motion.div}
            initial={{ height: 30 }}
            whileHover={{ height: 150 }}
            transition={{ delay: 0.1, duration: 0.5 }}
        >
            <NavTitle>{props.title}</NavTitle>            
        </MenuElement>
    )
}

export default NavElement