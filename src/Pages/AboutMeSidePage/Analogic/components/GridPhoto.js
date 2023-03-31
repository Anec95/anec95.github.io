import { motion } from "framer-motion"
import { GridPhotoElement } from "Pages/AboutMeSidePage/styledComponents/styledComponents"


function GridPhoto(props) {
    return (
        <GridPhotoElement
            src={props.src}
            columnStart={props.columnStart}
            columnEnd={props.columnEnd}
            rowStart={props.rowStart}
            rowEnd={props.rowEnd}

            as={motion.img}
            whileHover={{ scale: 1.1, transition: {type: 'spring', stiffness: 200, originX: 0} }}
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: props.delayImg }}}
            
        /> 
    )
}

export default GridPhoto