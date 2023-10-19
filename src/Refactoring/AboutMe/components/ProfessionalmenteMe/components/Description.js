import { motion } from "framer-motion"
import { StyledParagraph, StyledParagraphsBox, StyledPhoto, StyledTextBox } from "Refactoring/AboutMe/styledComponents/styledAboutMe"
import photoAnimated  from "Assets/images/thomas-bio-4-dark-slow_animation.gif"

function Description() {
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
    // const text4 = `Perché se non si vuol rimanere fermi nella vita, c'è bisogno di flessibilità e tenacia.`
    // const text5 = `“Chi vuol muovere il mondo, prima muova sé stesso!” --Socrate`

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
                whileHover={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                src={photoAnimated}
                alt="me"
                position={"right"}
            />
        </StyledTextBox>
    )
}

export default Description