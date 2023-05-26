import { InfoDiv, InfoIcon, InfoParagraph } from "../styledComponents/styledTattooStorefrontSite"
import { useState } from "react"
import { motion } from "framer-motion"


function InfoSoapBtn() {
    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(oldValue => !oldValue)
    }

    return (
        <InfoDiv
            show={show}
            onClick={handleShow}
            as={motion.div}
            whileTap={{
                scale: 1.05,
                zIndex: 10,
                backgroundColor: "rgb(255, 236, 237, 0.3)",
                transition: { duration: 0.5 }
            }}
            transition={{
                type: 'spring',
                stiffness: 250,
                originX: 0
            }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                backgroundColor: "transparent",
                transition: { duration: 0.5 }
            }}
        >
            {show === false &&
                <InfoIcon
                    className="material-icons-outlined"
                >
                    question_mark
                </InfoIcon>
            }
            {show &&
                <InfoParagraph>
                    Template pensato per prestarsi come Homepage di
                    un sito vetrina dove le immagini sono dominanti.
                </InfoParagraph>
            }
        </InfoDiv>
    )
}

export default InfoSoapBtn