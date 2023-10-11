import AnimatedPage from "components/AnimatedPage"
import EmailForm from "./components/EmailForm"
import TitleBox from "./components/TitleBox"
import { StyledMain } from "./styledComponents/styledContacts"

function Contacts(props) {

    return (
        <AnimatedPage>
            <StyledMain>
                <TitleBox />
                <EmailForm inputRef={props.inputRef} />
            </StyledMain>
        </AnimatedPage>
    )
}

export default Contacts