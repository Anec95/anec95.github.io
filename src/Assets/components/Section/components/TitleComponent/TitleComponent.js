import { StyledSubtitle, StyledTitle, TitleContainer, StyledLogo } from "../../styledComponents/styledSection"
import logoTM from "Assets/images/logo/logoTM_black.png"


function TitleComponent(props) {
    console.log(props.innerWidth)
    return (
        <TitleContainer>
            {/* {props.logo && <StyledLogo src={logoTM} />} */}
            {props.innerWidth > 500 && <StyledLogo src={logoTM} />}
            {props.title && <StyledTitle
                title={props.title}
            >
                {props.title}
            </StyledTitle>}
            {props.subtitle && <StyledSubtitle>{props.subtitle}</StyledSubtitle>}
        </TitleContainer>
    )
}

export default TitleComponent