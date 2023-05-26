import { NavContainer } from "../styledComponents/styledTattooStorefrontSite"
import NavElement from "./NavElement"



function NavBarTattoo() {
    return (
        <NavContainer>
            <NavElement
                nCont={1}
                title={"Vetrina"}
            />
            <NavElement
                nCont={2}
                title={"Chi Siamo"}
            />
            <NavElement
                nCont={3}
                title={"Dove Siamo"}
            />
            <NavElement
                nCont={4}
                title={"Contatti"}
            />
        </NavContainer>
    )
}

export default NavBarTattoo