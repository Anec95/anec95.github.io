import { StyledSubtitle, StyledTitle, TitleContainer } from "../../styledComponents/styledSection"



function TitleComponent(props) {

    return (
        <TitleContainer>
            <StyledTitle
                title={props.title}
            >
                {props.title}
            </StyledTitle>
            {props.subtitle && <StyledSubtitle>{props.subtitle}</StyledSubtitle>}
        </TitleContainer>
    )
}

export default TitleComponent