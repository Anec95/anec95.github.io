import Description from "./Description/Description";
import Skill from "./Skill/Skill";

import { StyledTextContainer } from "../styledComponents/styledProfesMe";


function TextOverflow() {

    return (
        <StyledTextContainer>
            <Description />
            <Skill />
        </StyledTextContainer>
    )
}

export default TextOverflow