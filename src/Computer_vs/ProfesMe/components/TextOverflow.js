import Description from "./Description/Description";
import Skill from "./Skill/Skill";

const { StyledTextContainer } = require("../styledComponents/styledProfesMe");



function TextOverflow() {

    return (
        <StyledTextContainer>
            <Description />
            <Skill />
        </StyledTextContainer>
    )
}

export default TextOverflow