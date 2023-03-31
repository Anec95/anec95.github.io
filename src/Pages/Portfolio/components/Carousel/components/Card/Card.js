import { Card, ClipProject, InfoProjectContainer, ProjectTitle, ProjectDescription, ProjectLink } from "../../styledComponents/styledCarousel"
import { motion } from "framer-motion"


function CardProject({clip, title, description, link_github, link_web_site, site_link_wording }) {
    return (
        <Card
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200, originX: 0 }}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1, transition: { delay: 1.25, duration: 1 }}}
            
        >
            <ClipProject src={clip} autoplay loop></ClipProject>
            <InfoProjectContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <ProjectLink to={link_github} target="_blank">Github repo</ProjectLink>
                <ProjectLink to={link_web_site} target="_blank">{site_link_wording}</ProjectLink>
            </InfoProjectContainer>
        </Card>
    )
}

export default CardProject