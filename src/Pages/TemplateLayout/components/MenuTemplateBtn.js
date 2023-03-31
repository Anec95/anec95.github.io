import { AppsBtn } from "../styledComponents/styledComponents"
import { motion } from "framer-motion"


function MenuTemplateBtn() {
    
    return (
        <AppsBtn
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, originX: 0 }}
            className="material-icons-outlined"
        >
            apps
        </AppsBtn>
    )
}

export default MenuTemplateBtn