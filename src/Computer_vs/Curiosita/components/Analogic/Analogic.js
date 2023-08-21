import { SidePageContainer, SidePageTitle, StyledIcon } from "./styledComponents/styledComponents"
import AnalogicGrid from "./components/AnalogicGrid"
import { useNavigate } from "react-router";


function Analogic() {
    const navigate = useNavigate();
            
    return (
        <SidePageContainer>
            <StyledIcon
                className="material-icons-round"
                onClick={() => navigate(-1)}
            >
                arrow_back_ios_new
            </StyledIcon>
            <SidePageTitle>Fotografia Analogica</SidePageTitle>
            <AnalogicGrid />
        </SidePageContainer>
    )
}

export default Analogic
