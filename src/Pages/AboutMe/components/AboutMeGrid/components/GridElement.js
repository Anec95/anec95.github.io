import { Element, ElementImg, ElementTitle } from "Pages/AboutMe/styledComponents/styledComponents"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"



function GridElement(props) {

    return (
        <Element
            to={props.linkSidePage}

            type={props.type}
            as={motion(NavLink)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, originX: 0 }}
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: props.delayAppear, duration: 1 } }}
        >
            <ElementImg src={props.src} type={props.type} />
            <ElementTitle tight={props.tight}>{props.elementTitle}</ElementTitle>
        </Element>
    )
}

export default GridElement