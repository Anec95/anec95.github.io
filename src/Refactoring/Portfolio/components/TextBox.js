import { StyledTextBox, StyledParagraph } from "../styledComponents/styledPortfolio";


function TextBox() {

    return (
        <StyledTextBox>
            <StyledParagraph>
                Questa sezione è dedicata ai progetti che ho realizzato a partire
                da agosto 2022 ad oggi.
            </StyledParagraph>
            <StyledParagraph>
                I primi esposti sono quelli più recenti, mentre man mano che si scorre
                a destra si va verso i primi realizzati.
            </StyledParagraph>
        </StyledTextBox>
    )
}

export default TextBox