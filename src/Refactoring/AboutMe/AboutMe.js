import AnimatedPage from "components/AnimatedPage"
import { StyledMain } from "./styledComponents/styledAboutMe"
import Bio from "./components/Bio/Bio"
import ProfessionalmenteMe from "./components/ProfessionalmenteMe/ProfessionalmenteMe"


function AboutMe() {
    return (
        <AnimatedPage>
            <StyledMain>
                <Bio />
                <ProfessionalmenteMe />
            </StyledMain>
        </AnimatedPage>
    )
}

export default AboutMe

