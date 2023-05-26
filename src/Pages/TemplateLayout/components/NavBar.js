import { TemplateNav } from "../styledComponents/styledComponents"
import { useNavigate } from "react-router-dom"
import Arrow from "./Arrow"
import MenuTemplateBtn from "./MenuTemplateBtn"
import { useEffect } from "react"

function NavBar(props) {
    const navigate = useNavigate()

    useEffect(() => {
        if(props.index === 0) {
            navigate("/template/escape_room")
        } 
        else if(props.index === 1) {
            navigate("/template/soap_storefront_site")
        } else if(props.index === 2) {
            navigate("/template/tattoo_storefront_site")
        } else {
            
        }
    }, [props.index, navigate])
    
    return (
        <TemplateNav>
            <Arrow direction={"left"} function={props.functionMinus} />
            <MenuTemplateBtn />
            <Arrow direction={"right"} function={props.functionPlus} />
        </TemplateNav>
    )
}

export default NavBar