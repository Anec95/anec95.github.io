import Footer from "Refactoring/components/Footer/Footer"
import Navbar from "Refactoring/components/Navbar/Navbar"
import { Outlet } from "react-router"


function Layout(props) {
    return (
        <>
            <Navbar />
            <Footer editItem={props.editItem} />
            <Outlet />
        </>
    )
}

export default Layout