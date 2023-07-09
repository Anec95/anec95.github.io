import { IconsContainer, StyledIcon } from "../../styledComponents/styledNavbar"



function Icons(props) {

    return (
        <IconsContainer>
            <StyledIcon
                className="material-icons-outlined"
                onClick={props.handleShow}
            >
                {props.showMenu ? "visibility" : "visibility_off"}
            </StyledIcon>
        </IconsContainer>
    )
}

export default Icons