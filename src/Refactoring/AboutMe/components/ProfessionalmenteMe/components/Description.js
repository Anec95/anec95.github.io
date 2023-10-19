import { motion } from "framer-motion"
import { StyledParagraph, StyledParagraphsBox, StyledPhoto, StyledTextBox } from "Refactoring/AboutMe/styledComponents/styledAboutMe"
import photoAnimated  from "Assets/images/photo-abaut_me/thomas-bio-4-dark-slow_animation.gif"

function Description(props) {
    const text = `Appassionato di antiquariato, letteratura, fotografia e natura,
        mi sono laureato in Lettere e Filosofia all'Università di Trento;
        ma è grazie all'esperienza del servizio civile che ho compreso
        come reinventarmi.`
    const text2 = `Durante questo anno passato nell'ufficio stampa occupandomi
        della gestione dei social e del sito web, realizzando le grafiche per
        le stories e i post, ho deciso di implementare le mie capacità iniziando
        (luglio 2022) il corso di start2impact per web development lato front-end,
        terminato ad aprile 2023.`
    const text3 = `A partire da febbraio 2023 sono riuscito a combinare questi due
        ambiti collaborando ad un progetto che mira a fare rete e networking tra le
        realtà del territorio Trentino, per il quale ricopro la posizione di social
        media manager e web developer.`

    return (
        <StyledTextBox>
            <StyledParagraphsBox>
                <StyledParagraph>
                    {text}
                </StyledParagraph>
                <StyledParagraph>
                    {text2}
                </StyledParagraph>
                <StyledParagraph>
                    {text3}
                </StyledParagraph>
            </StyledParagraphsBox>
            <StyledPhoto
                as={motion.img}
                whileHover={{ scale: props.width > 700 ? 1.3 : 1 }}
                transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                src={photoAnimated}
                alt="me"
                position={"right"}
            />
        </StyledTextBox>
    )
}

export default Description