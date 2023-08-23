import { StyledElement, StyledTitle } from "../../styledComponents/styledCuriosity"


function CuriosityElement(props) {

    return (
        <StyledElement
            to={props.link}
            order={props.order}
            src={props.photo}
            background_photo={props.background_photo}
        >
            <StyledTitle>{props.title}</StyledTitle>
        </StyledElement>
    )
}

export default CuriosityElement