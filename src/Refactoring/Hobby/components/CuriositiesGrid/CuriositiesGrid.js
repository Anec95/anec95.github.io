import analogic_background from "Assets/images/analogic.jpg"
import { StyledGrid, StyledWorkInProgress } from "Refactoring/Hobby/styledComponents/styledHobby"
import CuriosityElement from "../CuriosityElement/CuriosityElement"



function CuriositiesGrid() {

    return (
        <StyledGrid>
            <CuriosityElement
                order={1}
                title={"fotografia"}
                background_photo={analogic_background}
                link={"/hobby/analogic_photography"}
            />
            <StyledWorkInProgress>Nuovi interessi verranno catalogati a breve ...</StyledWorkInProgress>
        </StyledGrid>
    )
}

export default CuriositiesGrid