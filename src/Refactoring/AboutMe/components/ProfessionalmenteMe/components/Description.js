import { motion } from "framer-motion"
import { DescriptionContainer, ProfParagraph } from "Refactoring/AboutMe/styledComponents/styledAboutMe"


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
        <DescriptionContainer>
            <ProfParagraph
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                {text}
            </ProfParagraph>
            <ProfParagraph
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                {text2}
            </ProfParagraph>
            <ProfParagraph
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                {text3}
            </ProfParagraph>
            {/* <ProfParagraph
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {text4}
            </ProfParagraph>
            <ProfParagraph
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                {text5}
            </ProfParagraph> */}
        </DescriptionContainer>
    )
}

export default Description