import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"

function TemplateLayout(props) {
    return (
        <>
            <NavBar
                index={props.index}
                functionPlus={props.functionPlus}
                functionMinus={props.functionMinus}
            />
            <Outlet />
        </>
    )
}

export default TemplateLayout