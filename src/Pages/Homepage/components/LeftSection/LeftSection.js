import homePhoto from "Assets/images/analogic-photo/3-cime-autumn-2021.JPG"
import { motion } from "framer-motion"
import QuotesArea from "./components/QuotesArea/QuotesArea"
import { PhotoDiv, PhotoHomepage } from "./styledComponents/styledComponents"

function LeftSection() {
    return (
        <PhotoDiv
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 2 }}
        >
            <PhotoHomepage src={homePhoto} alt="Homepage" />
            <QuotesArea />
        </PhotoDiv>
    )
}

export default LeftSection