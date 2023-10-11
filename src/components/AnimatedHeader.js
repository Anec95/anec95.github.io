import { motion } from "framer-motion";


const animations = {
    initial:  {opacity: 0, y: 150},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -150}
}

const AnimatedHeader = ({children}) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.5}}
            style={{
                display: "flex",
                alignItems: "center"
            }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedHeader