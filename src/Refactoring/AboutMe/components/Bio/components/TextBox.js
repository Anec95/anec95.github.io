import { StyledParagraph, StyledParagraphsBox, StyledPhoto, StyledTextBox } from "../../../styledComponents/styledAboutMe"
// import photo from "Assets/images/analogic-photo/boy-by-the-lake-2020.jpg"
// import photo2 from "Assets/images/thomas-bio-4.jpg"
import photo3 from "Assets/images/thomas-bio-5.jpg"
import { motion } from "framer-motion"


function TextBox() {

    return (
        <StyledTextBox>
            {/* <StyledPhoto src={photo} alt="me" /> */}
            {/* <StyledPhoto src={photo2} alt="me" /> */}
            <StyledPhoto
                as={motion.img}
                whileHover={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                src={photo3}
                alt="me"
            />
            <StyledParagraphsBox>
                <StyledParagraph>
                    Vivo secondo natura e amo osservare; è così che dò vita ai
                    miei progetti. Lasciandomi ispirare da ciò che mi circonda
                    e seguendo il mio istinto.
                </StyledParagraph>
                <StyledParagraph>
                    Nella vita privata, i miei più grandi interessi sono
                    l'antiquariato - che coltivo andando a ricercare oggetti
                    curiosi e unici nei più grandi mercatini e mercati rimanga
                    pura e inviolata - e la natura - amo stare immerso nella
                    natura a contemplarla, ascoltando... e meditando senza pensieri.
                </StyledParagraph>
                <StyledParagraph>
                    Durante le esperienze che ho affrontato nella vita, ho compreso
                    che se non si vuole rimanere fermi e statici c'è bisogno di
                    flessibilità e tenacia, oltre a una buona dose di volontà.
                    Perché, come recita la mia frase preferita: “Chi vuol muovere
                    il mondo, prima muova sé stesso!” --Socrate
                </StyledParagraph>
            </StyledParagraphsBox>
        </StyledTextBox>
    )
}

export default TextBox