import { DescriptionContainer, ProfParagraph, ProfTitle } from "Pages/ProfessionalmenteMe/styledComponents/styledComponents"
import { motion } from "framer-motion"


function Description() {
    return (
        <DescriptionContainer>
            <ProfTitle
                as={motion.h1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Professionalmente Me
            </ProfTitle>
            <ProfParagraph
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                Appassionato di antiquariato, letteratura e fotografia, mi sono laureato in Lettere e Filosofia.
            </ProfParagraph>
            <ProfParagraph
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                Proprio come la mia frase preferita, che ormai mi accompagna da anni e mi aiuta nella flessibilità e a dare sempre il massimo,
                dopo l'anno svolto in servizio civile ho capito come sfruttare al meglio la mia creatività, iniziando un corso di web developer
                front end con start2impact.
            </ProfParagraph>
            <ProfParagraph
                as={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                Perché come disse Socrate “Chi vuol muovere il mondo, prima muova sé stesso!”
            </ProfParagraph>
        </DescriptionContainer>
    )
}

export default Description