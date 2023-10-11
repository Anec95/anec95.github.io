import {
    StyledCard,
    ProjectImg,
    ProjectTitle,
    ProjectLink
} from "../styledComponents/styledPortfolio";
// import { motion } from "framer-motion";


function Card(props) {

    return (
        <StyledCard
            // as={motion.div}
            // whileHover={{ scale: 1.05 }}
            // transition={{ type: 'spring', stiffness: 200, originX: 0 }}
        >
            <ProjectLink
                // target= "_blank"
                to={props.destination}
            >
                <ProjectImg src={props.img} />
                <ProjectTitle>{props.title}</ProjectTitle>
            </ProjectLink>
        </StyledCard>
    )
}

export default Card