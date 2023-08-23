import { StyledArrow, StyledFooter, StyledHeader, StyledTextIndex } from "./styledComponents/styledLayoutSP"
import logo from "Assets/images/logo/logoTM_black.png"
import { StyledImg } from "./styledComponents/styledLayoutSP"


function LayoutSP(props) {

    return (
        <>
            <StyledHeader>
                <StyledImg src={logo} alt="logo of TM" />
            </StyledHeader>

            <StyledFooter>
                <StyledArrow
                    className="material-icons-round"
                    onClick={props.handleIdxMinus}
                >
                    arrow_back_ios
                </StyledArrow>
                <StyledTextIndex>{props.idxSection + 1} di {props.length}</StyledTextIndex>
                <StyledArrow
                    className="material-icons-round"
                    onClick={props.handleIdxPlus}
                >
                    arrow_forward_ios
                </StyledArrow>
            </StyledFooter>
        </>        
    )
}

export default LayoutSP