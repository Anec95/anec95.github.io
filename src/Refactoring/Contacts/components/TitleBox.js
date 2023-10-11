import { StyledPhotoTitle, StyledTitle, StyledTitleBox } from "../styledComponents/styledContacts"
import photoTitle from "Assets/images/symbol-304967_1280.png"


function TitleBox() {

    return (
        <StyledTitleBox>
            <StyledPhotoTitle src={photoTitle} alt="@" />
            <StyledTitle>Contattami</StyledTitle>
        </StyledTitleBox>
    )
}

export default TitleBox