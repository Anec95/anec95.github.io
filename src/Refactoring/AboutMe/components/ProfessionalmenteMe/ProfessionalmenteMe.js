import Description from "./components/Description";
import Skill from "./components/Skill";
import { StyledTitle } from "Refactoring/AboutMe/styledComponents/styledAboutMe";


function ProfessionalmenteMe(props) {

    return (
        <>
            <StyledTitle>Professionalmente Me</StyledTitle>
            <Description width={props.width} />
            <Skill />
        </>
    )
}

export default ProfessionalmenteMe