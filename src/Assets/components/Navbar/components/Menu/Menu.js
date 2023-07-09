import { MenuContainer, NavElement } from "../../styledComponents/styledNavbar"


function Menu(props) {

    return (
        <MenuContainer>
            <NavElement
                href={"#professionalmente_me"}
                underline={(props.scrollPosition > props.pageHeight.profesMe.min && props.scrollPosition < props.pageHeight.profesMe.max) ? true : false}
            >
                Professionalmente Me
            </NavElement>
            <NavElement
                href={"#portfolio"}
                underline={(props.scrollPosition > props.pageHeight.portfolio.min && props.scrollPosition < props.pageHeight.portfolio.max) ? true : false}
            >
                Portfolio
            </NavElement>
            <NavElement
                href={"#template"}
                underline={(props.scrollPosition > props.pageHeight.template.min && props.scrollPosition < props.pageHeight.template.max) ? true : false}
            >
                Template
            </NavElement>
            <NavElement
                href={"#curiosita"}
                underline={(props.scrollPosition > props.pageHeight.curiosita.min && props.scrollPosition < props.pageHeight.curiosita.max) ? true : false}             
            >
                Curiosità
            </NavElement>
            <NavElement
                href={"#contattami"}
                underline={props.scrollPosition > props.pageHeight.contattiMin ? true : false}
            >
                Contattami
            </NavElement>
        </MenuContainer>
    )
}

export default Menu