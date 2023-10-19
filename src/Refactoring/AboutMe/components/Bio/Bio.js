import { StyledTitle } from "Refactoring/AboutMe/styledComponents/styledAboutMe"
import TextBox from "./components/TextBox"


function Bio(props) {

    return (
        <>
            <StyledTitle>About Me</StyledTitle>
            <TextBox width={props.width} />
        </>
    )
}

export default Bio