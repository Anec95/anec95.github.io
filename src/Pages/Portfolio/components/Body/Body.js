import { BodyConteiner, BodyTitle, InfoContainer, Author, Description } from "../styledComponents/styledBody/styledBody"
import { motion } from "framer-motion"


function Body() {
    return (
        <BodyConteiner>
            <InfoContainer>
                <BodyTitle
                    as={motion.h1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Progetti
                </BodyTitle>
                <Author
                    as={motion.h3}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >Thomas Miori</Author>
                <Description
                    as={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75, duration: 1 }}
                >
                    Questa sezione è dedicata ai progetti che ho realizzato a partire da agosto 2022 ad oggi.
                </Description>

                <Description
                    as={motion.p}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.75, duration: 1 }}
                >
                    A destra si trovano i progetti più recenti, mentre man mano che si scorrono quelli a sinistra si va verso i primi.
                </Description>
            </InfoContainer>
        </BodyConteiner>
    )
}

export default Body