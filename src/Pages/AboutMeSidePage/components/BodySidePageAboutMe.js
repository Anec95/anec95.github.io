import { InfoPageContainer, SidePageContainer, SidePageTitle, TextParagraph } from "../styledComponents/styledComponents"


function BodySidePageAboutMe(props) {

    return (
        <SidePageContainer section={props.section} >
            <InfoPageContainer>
                <SidePageTitle
                    color={"light"}            
                >
                    {props.title}
                </SidePageTitle> 
                <TextParagraph>
                    {props.firstText}
                </TextParagraph>
                <TextParagraph>
                    {props.secondText}
                </TextParagraph>
                {props.thirdText && <TextParagraph>
                    {props.thirdText}
                </TextParagraph>}
                {props.fourthText && <TextParagraph>
                    {props.fourthText}
                </TextParagraph>}
            </InfoPageContainer>
            
        </SidePageContainer>
    )
}

export default BodySidePageAboutMe