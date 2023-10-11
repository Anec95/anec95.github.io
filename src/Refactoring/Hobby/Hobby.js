import AnimatedPage from "components/AnimatedPage"
import { StyledMain, StyledTitle } from "./styledComponents/styledHobby"
import CuriositiesGrid from "./components/CuriositiesGrid/CuriositiesGrid"

function Hobby() {

    return (
        <AnimatedPage>
            <StyledMain>
                <StyledTitle>Interessi</StyledTitle>
                <CuriositiesGrid />
            </StyledMain>
        </AnimatedPage>
    )
}

export default Hobby