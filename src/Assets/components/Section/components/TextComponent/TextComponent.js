import { TextContainer, TextTitle, StyledText } from "../../styledComponents/styledSection"


function TextComponent(props) {

    return (
        <TextContainer>
            {props.title && <TextTitle>{props.title}</TextTitle>}
            <StyledText>{props.text}</StyledText>
            {props.text2 && <StyledText>{props.text2}</StyledText>}
            {props.text3 && <StyledText>{props.text3}</StyledText>}
        </TextContainer>
    )
}

export default TextComponent