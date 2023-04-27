import { NavContainer } from "../styledComponents/styledSoapTemplate"
import NavElement from "./NavElement"


function NavBar() {
    return (
        <NavContainer>
            <NavElement
                elementTitle={"Visualizza i prodotti"}
            />
            <NavElement
                elementTitle={"Scopri chi siamo"}
            />
        </NavContainer>
    )
}

export default NavBar