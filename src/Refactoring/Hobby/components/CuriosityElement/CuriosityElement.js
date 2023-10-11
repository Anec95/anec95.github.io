import { StyledElement, StyledCardTitle } from "Refactoring/Hobby/styledComponents/styledHobby"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


function CuriosityElement(props) {

    return (
        <StyledElement
            as={motion(Link)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, originX: 0 }}
            to={props.link}
            order={props.order}
            src={props.photo}
            background_photo={props.background_photo}
        >
            <StyledCardTitle>{props.title}</StyledCardTitle>
        </StyledElement>
    )
}

export default CuriosityElement