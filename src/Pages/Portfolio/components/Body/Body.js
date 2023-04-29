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
                    I primi esposti sono quelli più recenti, mentre man mano che si scorre a destra si va verso i primi realizzati.
                </Description>
            </InfoContainer>
        </BodyConteiner>
    )
}

export default Body