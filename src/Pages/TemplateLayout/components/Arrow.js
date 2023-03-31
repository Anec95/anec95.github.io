import { ButtonArrow } from "../styledComponents/styledComponents"
import { motion } from "framer-motion"


function Arrow(props) {
    
    return (
        <ButtonArrow
            onClick={props.function}

            className="material-icons-round"
            direction={props.direction}
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, originX: 0 }}
        >
            {props.direction === "left" ? "navigate_before" : "navigate_next"}
        </ButtonArrow>
    )
}

export default Arrow