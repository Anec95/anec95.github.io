import { StyledGrid } from "Computer_vs/Curiosita/styledComponents/styledCuriosity"
import CuriosityElement from "../CuriosityElement/CuriosityElement"
import analogic_background from "Assets/images/analogic.jpg"


function CuriositiesGrid() {

    return (
        <StyledGrid>
            <CuriosityElement
                order={1}
                title={"fotografia"}
                background_photo={analogic_background}
                link={"/analogic_photography"}
            />
        </StyledGrid>
    )
}

export default CuriositiesGrid