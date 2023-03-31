import { Card, TemplateImg, TemplateLink } from "Pages/Template/styledComponents/styledCarousel"
import { motion } from "framer-motion"


function TemplateCard(props) {
    return (
        <Card>
            <TemplateLink to={props.link}>
                <TemplateImg
                    as={motion.img}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    src={props.photo}
                />
            </TemplateLink>
        </Card>
    )
}

export default TemplateCard